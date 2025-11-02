
document.addEventListener('DOMContentLoaded', ()=>{
    const inlineBanner = document.createElement("div");
      inlineBanner.id = "lutanAdInline";
      inlineBanner.style.cssText = `
        max-width: 700px;
        margin: 20px auto;
        width:90%;
        padding: 12px;
        background:rgb(179, 0, 255);
        border: 1px solidrgb(38, 255, 0);
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        font-family: 'Inter', sans-serif;
        text-align: center;
        animation: fadeSlide 0.8s ease forwards;
        color:green;
        position:relative;
      `;
      inlineBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-start;gap:10px;">
        <div style="position:fixed; right:10px; background:#333; color:#fff; top:5px; padding:2px;">Ad</div>
          <img src="https://i.ibb.co/204vVgsT/mystic-ls-s.png" style="width:200px;height:200px;border-radius:50%;border:2px solid rgb(0, 255, 30);">
          <div style="text-align:left;">
            <strong style="font-size:13px; color:#fff000">Just Confess!!!. It's Mystiq Baby  </strong>
            <hr>
            <p style="font-size:11px;color:#fff;margin:3px 0;">The mystical anonymous confession space. Share secrets, receive vibes, and keep it real with your circle..</p>
            
            <p style="list-style:none; font-weight:bolder; color:black; font-size:small;">
                Confess without revealing your identity. No cap, just vibes.</p>
            <a href="https://mystiq.xo.je" target="_blank" 
               style="display:inline-block;background:#007bff;color:#fff;padding:5px 8px;border-radius:4px;font-size:10px;text-decoration:none;">
               Visit Now
            </a>
          </div>
        </div>
      `;
        inlineBanner.addEventListener('click', ()=>{window.open(`https://mystiq.xo.je`)})
      const myscript = document.getElementById("myscript");
      if (myscript && myscript.parentNode) {
        setTimeout(() => {
          myscript.parentNode.insertBefore(inlineBanner, myscript);
        }, 10); 
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