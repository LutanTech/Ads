document.addEventListener("DOMContentLoaded", () => {
  // === TOP RIGHT FLOATING AD ===
  const topBanner = document.createElement("div");
  topBanner.id = "lutanAdTop";
  topBanner.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      width: 260px;
      color:green;
      background: linear-gradient(145deg,#fff,#e9f7ef);
      border: 1px solid #007bff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      font-family: 'Inter', sans-serif;
      overflow: hidden;
      z-index: 9999;
      animation: fadeSlide 0.8s ease forwards;
    ">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 10px;">
        <img src="https://i.ibb.co/FbGTqdMC/me-4.jpg" style="width:30px;height:30px;border-radius:50%;border:2px solid #007bff;">
        <button onclick="this.closest('#lutanAdTop').remove()" style="background:none;border:none;font-size:18px;cursor:pointer;">&times;</button>
      </div>
      <div style="padding:0 10px 10px 10px;text-align:center;">
        <strong style="font-size:13px;">Lutan Tech: Innovate & Grow</strong>
        <p style="font-size:11px;color:#555;">Secure, high-performance portfolios, smart apps & web services.</p>
        <a href="https://lutan-tech.is-great.org/?utm_source=${window.location.origin}&utm_medium=top_ad" target="_blank" 
           style="display:inline-block;background:#28a745;color:#fff;padding:6px 10px;border-radius:4px;font-size:11px;text-decoration:none;">
           Visit Site
        </a>
      </div>
    </div>
  `;
  setTimeout(() => {
      document.body.appendChild(topBanner);

  }, 60000);

  // === INLINE MID-PAGE AD ===
  const inlineBanner = document.createElement("div");
  inlineBanner.id = "lutanAdInline";
  inlineBanner.style.cssText = `
    max-width: 700px;
    margin: 20px auto;
    width:90%;
    padding: 12px;
    background: #dff4ff;
    border: 1px solid #007bff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    font-family: 'Inter', sans-serif;
    text-align: center;
    animation: fadeSlide 0.8s ease forwards;
    color:green
  `;
  inlineBanner.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-around;gap:10px;">
    <div style="position:fixed; right:10px; background:#333; color:#0f0; top:5px; padding:2px;">Ad</div>
      <img src="https://i.ibb.co/FbGTqdMC/me-4.jpg" style="width:50px;height:50px;border-radius:50%;border:2px solid #007bff;">
      <div style="text-align:left;">
        <strong style="font-size:13px;">🌐Need a website like this or any other type? <br> Lutan Tech Builds Modern Web Experiences</strong>
        <p style="font-size:11px;color:#333;margin:3px 0;">Dynamic apps, smart backends, aesthetic designs — all in one dev.</p>
        <a href="https://lutan-tech.is-great.org/?utm_source=${window.location.origin}&utm_medium=inline_ad" target="_blank" 
           style="display:inline-block;background:#007bff;color:#fff;padding:5px 8px;border-radius:4px;font-size:10px;text-decoration:none;">
           Visit Now
        </a>
      </div>
    </div>
  `;
    inlineBanner.addEventListener('click', ()=>{window.open(`https://lutan-tech.is-great.org/?utm_source=${window.location.origin}&utm_medium=inline_ad`)})
  const adScript = document.getElementById("adscript");
  if (adScript && adScript.parentNode) {
    adScript.parentNode.insertBefore(inlineBanner, adScript);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeSlide {
      from {opacity: 0; transform: translateY(-10px);}
      to {opacity: 1; transform: translateY(0);}
    }
  `;
  document.head.appendChild(style);
});
