document.addEventListener('DOMContentLoaded', ()=>{
    const inlineBanner = document.createElement("div");
    inlineBanner.id = "lutanAdInline";
    inlineBanner.style.cssText = `
      max-width: 700px;
      margin: 20px auto;
      width: 90%;
      padding: 12px;
      background: linear-gradient(135deg, #001f3f, #004d4d);
      border: 1px solid #00ffff;
      box-shadow: 0 2px 8px rgba(0,255,255,0.25);
      font-family: 'Inter', sans-serif;
      text-align: center;
      animation: fadeSlide 0.8s ease forwards;
      color: #fff;
      position: relative;
      border-radius: 10px;
    `;
    inlineBanner.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:flex-start;gap:12px; flex-direction:column">
        <div style="position:fixed; right:10px; background:#00ffff; color:#000; top:5px; padding:2px 6px; font-weight:600; border-radius:4px;">Ad</div>
        <img src="https://i.ibb.co/k2jvsQjF/cyberix-logo-2.png" 
             style="width:100px;height:100px;border-radius:50%;border:2px solid #00ffff;object-fit:cover;">
        <div style="text-align:left;">
          <strong style="font-size:20px; color:#00ffff;">Lutan Cyber Services</strong>
          <hr style="border:1px solid #00ffff;">
          <p style="font-size:17px;color:#eee;margin:3px 0;">Your one-stop cyber café for printing, designs, and online help.</p>
          <br>
          <b>Services: </b>
          <ul style="font-size:15px;color:#ccc;margin:6px 0;list-style:none;padding:0; display:flex; flex-direction:column; gap:10px;">
            <li> Printing & Photocopying</li>
            <li> Assignments & CV Editing</li>
            <li> Poster & Logo Design</li>
            <li> HELB, KRA, NHIF, NSSF, eCitizen</li>
            <li>SHA Registration & Updates</li>
          </ul>
          <a href="https://lutan-tech.is-great.org/cyber/" target="_blank" 
             style="display:inline-block;background:#00ffff;color:#000;padding:6px 10px;border-radius:4px;font-size:10px;text-decoration:none;margin-top:12px;font-weight:bold;">
             Visit Our Cyber Hub
          </a>
         / <i class="fas fa-phone"></i>  <i class="fab fa-whatsapp"></i> [ +2547 11 80 82 86 ]
        </div>
      </div>
    `;
    inlineBanner.addEventListener('click', ()=>{
      window.open(`https://lutan-tech.is-great.org/cyber/`);
    });
  
    const cybscript = document.getElementById("cybscript");
    if (cybscript && cybscript.parentNode) {
      setTimeout(() => {
        cybscript.parentNode.insertBefore(inlineBanner, cybscript);
      }, 10);
    }
  
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeSlide {
        from {opacity: 0; transform: translateY(-10px);}
        to {opacity: 1; transform: translateY(0);}
      }
      #lutanAdInline:hover {
        box-shadow: 0 0 15px rgba(0,255,255,0.5);
        transform: scale(1.01);
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  });
  