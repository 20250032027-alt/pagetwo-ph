(function() {
  // ── Price: grab from the rendered price element ──
  var price = 0;
  var origPrice = 0;

  // Try multiple price selectors
  var priceSelectors = [
    '.IZPeQz', '[class*="IZPeQz"]',
    '[class*="priceSectionMain"] [class*="price"]',
    '.pdp-price',
  ];
  for (var pi = 0; pi < priceSelectors.length; pi++) {
    var el = document.querySelector(priceSelectors[pi]);
    if (el && el.textContent) {
      var num = parseFloat(el.textContent.replace(/[^\d.]/g, ''));
      if (num > 0) { price = num; break; }
    }
  }

  // Original/crossed-out price
  var origSelectors = ['.ZA5sW5', '[class*="ZA5sW5"]', '[class*="price-original"]', '[class*="priceOriginal"]'];
  for (var oi = 0; oi < origSelectors.length; oi++) {
    var oel = document.querySelector(origSelectors[oi]);
    if (oel && oel.textContent) {
      var onum = parseFloat(oel.textContent.replace(/[^\d.]/g, ''));
      if (onum > 0) { origPrice = onum; break; }
    }
  }

  // Fallback: scan all elements for peso amounts
  if (!price) {
    var allEls = document.querySelectorAll('*');
    for (var ai = 0; ai < allEls.length; ai++) {
      var t = allEls[ai].textContent.trim();
      if (t.startsWith('\u20b1') && allEls[ai].children.length === 0) {
        var n = parseFloat(t.replace(/[^\d.]/g, ''));
        if (n > 10 && n < 100000) {
          if (!price) price = n;
          else if (n > price && !origPrice) origPrice = n;
        }
      }
    }
  }

  // ── Shop name ──
  var shopName = '';
  var shopSelectors = [
    '.s-3ROkx', '[class*="seller-name"]', '[class*="shop-name"]',
    '[class*="shopName"]', '.wMdpk span', '[class*="wMdpk"]',
  ];
  for (var si = 0; si < shopSelectors.length; si++) {
    var sel = document.querySelector(shopSelectors[si]);
    if (sel && sel.textContent.trim()) { shopName = sel.textContent.trim(); break; }
  }
  // Fallback: look for the shop section at bottom
  if (!shopName) {
    var links = document.querySelectorAll('a[href*="/shop/"]');
    for (var li = 0; li < links.length; li++) {
      var lt = links[li].textContent.trim();
      if (lt && lt.length < 50 && lt.length > 1) { shopName = lt; break; }
    }
  }

  // ── Product name ──
  var name = '';
  var nameSelectors = ['h1', '[class*="pdp-product-title"]', '[class*="productName"]', '[class*="product-name"]'];
  for (var ni = 0; ni < nameSelectors.length; ni++) {
    var nel = document.querySelector(nameSelectors[ni]);
    if (nel && nel.textContent.trim().length > 3) { name = nel.textContent.trim(); break; }
  }
  if (!name) name = document.title.replace(/\s*\|.*/, '').trim();

  // ── Rating ──
  var rating = 0;
  var ratingEl = document.querySelector('[class*="rating"] [class*="number"], [class*="shopRating"]');
  if (ratingEl) rating = parseFloat(ratingEl.textContent) || 0;

  // ── Sold count ──
  var sold = 0;
  var soldEls = document.querySelectorAll('*');
  for (var xi = 0; xi < soldEls.length; xi++) {
    var xt = soldEls[xi].textContent.trim();
    if ((xt.indexOf('Sold') > -1 || xt.indexOf('sold') > -1) && soldEls[xi].children.length === 0) {
      var snum = parseInt(xt.replace(/[^\d]/g, ''));
      if (snum > 0) { sold = snum; break; }
    }
  }

  // ── Image ──
  var imageUrl = '';
  var imgs = document.querySelectorAll('img');
  for (var ii = 0; ii < imgs.length; ii++) {
    var src = imgs[ii].src || '';
    if (src.indexOf('susercontent') > -1 && imgs[ii].naturalWidth > 200) {
      imageUrl = src.split('?')[0];
      break;
    }
  }

  // ── IDs from URL ──
  var urlMatch = location.href.match(/[.-]i\.(\d+)\.(\d+)/);
  var shopid = urlMatch ? urlMatch[1] : '';
  var itemid = urlMatch ? urlMatch[2] : '';

  // Try __NEXT_DATA__ for IDs and extra info if available
  try {
    var ndScript = document.getElementById('__NEXT_DATA__');
    if (ndScript) {
      function findItem(obj, d) {
        if (!obj || typeof obj !== 'object' || d > 12) return null;
        if (obj.itemid && obj.name) return obj;
        var ks = Object.keys(obj);
        for (var k = 0; k < ks.length; k++) {
          var r = findItem(obj[ks[k]], d + 1);
          if (r) return r;
        }
        return null;
      }
      var ndData = JSON.parse(ndScript.textContent);
      var ndItem = findItem(ndData, 0);
      if (ndItem) {
        if (!shopid && ndItem.shopid) shopid = String(ndItem.shopid);
        if (!itemid && ndItem.itemid) itemid = String(ndItem.itemid);
        if (!shopName && (ndItem.shop_name || ndItem.shopname)) shopName = ndItem.shop_name || ndItem.shopname;
        if (!rating && ndItem.item_rating && ndItem.item_rating.rating_star) {
          rating = Math.round(ndItem.item_rating.rating_star * 10) / 10;
        }
        if (!sold && ndItem.historical_sold) sold = ndItem.historical_sold;
        var desc = (ndItem.description || '').slice(0, 200).replace(/\n/g, ' ').trim();
        if (desc) out_desc = desc;
      }
    }
  } catch(e) {}

  if (!shopid || !itemid) {
    alert('Could not find product IDs from the URL. Make sure you are on a product page.');
    return;
  }

  var out = {
    shopid: shopid,
    itemid: itemid,
    shopName: shopName || 'Unknown Shop',
    name: name,
    description: (typeof out_desc !== 'undefined') ? out_desc : '',
    price: price,
    sold: sold,
  };
  if (origPrice && origPrice > price) out.originalPrice = origPrice;
  if (rating) out.rating = rating;
  if (imageUrl) out.imageUrl = imageUrl;

  // ── Download product.json ──
  var json = JSON.stringify(out, null, 2);
  var blob = new Blob([json], {type: 'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'product.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('Downloaded product.json — preview:');
  console.log(json);
})();
