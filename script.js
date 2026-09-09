function showStart() {
  document.getElementById("target").onclick = function() {window.location.href='search.html';}
}
function showDone() {
  document.getElementById("target").onclick = function() {window.location.href='product_page1.html';}
}
function showOverview() {
  document.getElementById("Title").textContent = "Overview"
  document.getElementById("description").innerHTML =
  '<strong>Materials Used</strong><br></br><ol> <li>18/8 (304) kitchen-grade stainless steel — double-wall (inner & outer. YETI states its drinkware is made from 304 / 18/8 stainless steel (double-wall vacuum insulated). YETI+1 </li><br></br><strong>Health Impact</strong><br></br> jsdnsdf<br></br><strong>Environmental Impact</strong><br></br> 18/8 (304) kitchen-grade stainless steel — double-wall (inner & outer)<br></br><strong>Social/Ethical</strong><br></br> 18/8 (304) kitchen-grade stainless steel — double-wall (inner & outer)<br></br><strong>Alternatives</strong><br></br> 18/8 (304) kitchen-grade stainless steel — double-wall (inner & outer)'
}
function showMaterials() {
  document.getElementById("Title").textContent = "Materials"
  document.getElementById("description").innerHTML ="<strong>18/8 Stainless Steel</strong><br>what is it <li>A food-grade metal alloy made primarily of iron, chromium (18%), and nickel (8%).</li><br>why is it used<li>Strong and durable</li><li>Rust resistant</li><li>Doesn't absorb flavors or odors</li><li>Easily recyclable</li><br><strong>Polypropylene (PP)</strong><br>What is it?<li>A lightweight plastic commonly used in reusable food containers and bottle caps.</li><br>Why is it used?<li>Lightweight</li><li>Impact resistant</li><li>BPA-free</li><li>Dishwasher safe</li><br><strong>Silicone Rubber</strong><br>What is it?<li>A flexible synthetic rubber made from silica (sand).</li><br>Why is it used?<li>Creates a watertight seal</li><li>Flexible</li><li>Heat resistant</li><li>Long lasting</li><br><strong>DuraCoat™ Powder Coating (Black Finish)</strong><br>what is it<li>A baked on polymer coating applied to the outside of the bottle.</li><br>Why is it used?<li>Adds colors</li><li>Improves grip</li><li>Protects against scratches</li><li>More durable than normal paint</li>"
}
function showHealth() {
  document.getElementById("Title").textContent = "Health Effects";
  document.getElementById("description").innerHTML = 
    "<strong>Stainless Steel</strong><br>" +
    "✅ Food safe<br>" +
    "✅ Doesn't contain BPA<br>" +
    "✅ Doesn't release microplastics<br>" +
    "⚠️ Tiny amounts of nickel can leach into acidic drinks, but levels are generally considered safe for most people.<br><br>" +
    "<strong>Polypropylene</strong><br>" +
    "✅ BPA-free<br>" +
    "✅ Approved for food contact<br>" +
    "⚠️ Over time, worn plastic may shed microscopic plastic particles, though health effects are still being studied.<br><br>" +
    "<strong>Silicone</strong><br>" +
    "✅ Non-toxic<br>" +
    "✅ Stable at high temperatures<br>" +
    "✅ Commonly used in medical and baby products<br><br>" +
    "<strong>Powder Coating</strong><br>" +
    "✅ Doesn't touch your drink<br>" +
    "✅ Chemically stable after curing<br>" +
    "⚠️ If scratched, it mainly affects appearance rather than safety.";
}

function showEnvironment() {
  document.getElementById("Title").textContent = "Environment Impacts";
  document.getElementById("description").innerHTML = 
    "<strong>Stainless Steel</strong><br>" +
    "Pros: Highly recyclable, Extremely durable, Can last for decades, Reduces the need for disposable bottles.<br>" +
    "Cons: Mining iron, chromium, and nickel impacts ecosystems; Manufacturing requires large amounts of energy.<br><br>" +
    "<strong>Polypropylene</strong><br>" +
    "Pros: Lightweight, Uses relatively little material.<br>" +
    "Cons: Made from fossil fuels, Not biodegradable, Recycling rates are low in many areas.<br><br>" +
    "<strong>Silicone</strong><br>" +
    "Pros: Long lifespan, Doesn't need frequent replacement.<br>" +
    "Cons: Difficult to recycle, Usually ends up in landfill.<br><br>" +
    "<strong>Powder Coating</strong><br>" +
    "Pros: More durable than liquid paint, Produces fewer air pollutants during manufacturing, Helps extend the bottle's lifespan.<br>" +
    "Cons: Petroleum-based, Cannot be recycled separately.";
}

function showEndOfLife() {
  document.getElementById("Title").textContent = "Product End of Life";
  document.getElementById("description").innerHTML = 
    "<strong>Bottle Body</strong><br>" +
    "♻️ Recyclable as stainless steel.<br>" +
    "The metal can be melted down and made into new products with little loss in quality.<br><br>" +
    "<strong>Plastic Lid</strong><br>" +
    "♻️ Sometimes recyclable.<br>" +
    "Availability depends on local recycling programs. Small plastic parts may not be accepted everywhere.<br><br>" +
    "<strong>Silicone Gasket</strong><br>" +
    "⚠️ Rarely recycled.<br>" +
    "Most are thrown away because few recycling facilities accept silicone.<br><br>" +
    "<strong>Powder Coating</strong><br>" +
    "The coating is not recycled on its own. During steel recycling, it is burned off in the high-temperature melting process while the stainless steel is recovered.<br><br>" +
    "<strong>Overall</strong><br>" +
    "Because the bottle is designed to last for many years, its greatest environmental benefit comes from reuse. Replacing hundreds or thousands of single-use plastic bottles can offset the impacts of its manufacturing over time.";
}

function showSources() {
  document.getElementById("Title").textContent = "Sources";
  document.getElementById("description").innerHTML =  
    "<strong>Product Information</strong><br>" +
    "YETI. Rambler® Water Bottle with Chug Cap (product specifications)<br><br>" +
    "<strong>Government Resources</strong><br>" +
    "U.S. Food & Drug Administration (FDA) – Food Contact Substances<br>" +
    "U.S. Environmental Protection Agency (EPA) – Sustainable Materials Management<br>" +
    "U.S. Geological Survey (USGS) – Chromium, Nickel, and Iron Statistics<br><br>" +
    "<strong>Industry Organizations</strong><br>" +
    "World Stainless Association (formerly ISSF) – Stainless steel recycling and life-cycle information<br><br>" +
    "<strong>Research Databases</strong><br>" +
    "PubMed<br>" +
    "Google Scholar<br>" +
    "ScienceDirect<br>" +
    "Springer Nature<br><br>" +
    "<strong>Suggested Research Topics</strong><br>" +
    "Life Cycle Assessment (LCA) of stainless steel water bottles<br>" +
    "Nickel migration from stainless steel food containers<br>" +
    "Polypropylene food-contact safety<br>" +
    "Silicone elastomers in food applications<br>" +
    "Environmental impacts of powder coating";
}





