(function () {
    if (document.getElementById('lutanAdWrapperTop') || document.getElementById('lutanAdWrapperMid')) return;
  
    // --- Top-right Banner ---
    const topBanner = document.createElement('div');
    topBanner.id = 'lutanAdWrapperTop';
    topBanner.innerHTML = `
      <a href="https://lutan-tech.is-great.org/" target="_blank" id="lutanAdTop" title="Visit Lutan Tech">
        <button class="lutanCloseBtn">×</button>
        <div class="lutanAdLogo"><img src="https://i.ibb.co/FbGTqdMC/me-4.jpg" alt="Lutan Tech"></div>
        <div class="lutanAdContent">
          <div class="lutanAdHeadline">Lutan Tech: Innovate & Grow</div>
          <div class="lutanAdText">Secure, clean, fast web builds.</div>
        </div>
        <div class="lutanAdCTA">Visit Site</div>
      </a>
    `;
    document.body.appendChild(topBanner);
  
    // --- Middle Banner (injected between content) ---
    const midBanner = document.createElement('div');
    midBanner.id = 'lutanAdWrapperMid';
    midBanner.innerHTML = `
      <a href="https://lutan-tech.is-great.org/" target="_blank" id="lutanAdMid" title="Check out Lutan Tech">
        <button class="lutanCloseBtn">×</button>
        <div class="lutanAdBody">
          <img src="https://i.ibb.co/KpHnKVW0/LUTAN-LOGO.png" alt="Lutan Tech Logo" class="lutanMidLogo">
          <div class="lutanMidText">
            <h3>🚀 Lutan Tech Builds Modern Web Experiences</h3>
            <p>Dynamic apps, smart backends, aesthetic designs — all in one dev.</p>
            <span class="lutanMidCTA">👉 Visit Now</span>
          </div>
        </div>
      </a>
    `;
  
    // Find a target div somewhere near the middle of the page
    const allDivs = document.querySelectorAll('div');
    const insertIndex = Math.floor(allDivs.length / 2);
    const targetDiv = allDivs[insertIndex] || document.body;
    targetDiv.parentNode.insertBefore(midBanner, targetDiv.nextSibling);
  
    // --- Styles ---
    const style = document.createElement('style');
    style.textContent = `
      /* Top Banner */
      #lutanAdWrapperTop {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99999;
        font-family: 'Inter', sans-serif;
        animation: lutanSlideIn 0.8s ease-out forwards;
      }
      @keyframes lutanSlideIn {
        from { transform: translateX(150%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      #lutanAdTop {
        width: 230px;
        height: 110px;
        display: flex;
        align-items: center;
        padding: 8px;
        background: linear-gradient(135deg, #fff, #e0f7ff);
        border-radius: 12px;
        border: 1px solid #007bff;
        color: #222;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        position: relative;
        overflow: hidden;
        text-decoration: none;
      }
      #lutanAdTop:hover { transform: scale(1.05); box-shadow: 0 8px 15px rgba(0,123,255,0.3); }
      .lutanAdLogo img { width: 45px; height: 45px; border-radius: 50%; border: 2px solid #007bff; }
      .lutanAdContent { flex: 1; padding: 0 8px; }
      .lutanAdHeadline { font-size: 12px; font-weight: 700; color: #333; }
      .lutanAdText { font-size: 9px; color: #555; }
      .lutanAdCTA { background: #28a745; color: #fff; font-size: 10px; padding: 4px; text-align: center; position: absolute; bottom: 0; width: 100%; border-top: 1px solid #218838; }
      .lutanCloseBtn {
        position: absolute;
        top: 3px;
        right: 4px;
        background: rgba(0,0,0,0.3);
        color: white;
        border: none;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        cursor: pointer;
        font-size: 12px;
      }
      .lutanCloseBtn:hover { background: rgba(0,0,0,0.5); }
  
      /* Middle Banner */
      #lutanAdWrapperMid {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 40px 0;
        animation: lutanFadeUp 0.9s ease-out;
        font-family: 'Inter', sans-serif;
      }
      @keyframes lutanFadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      #lutanAdMid {
        display: block;
        width: 90%;
        max-width: 600px;
        border-radius: 14px;
        overflow: hidden;
        text-decoration: none;
        position: relative;
        background: linear-gradient(135deg, #c8f7dc, #e0f7ff);
        border: 2px solid #007bff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        color: #000;
        transition: transform 0.3s;
      }
      #lutanAdMid:hover { transform: scale(1.02); }
      .lutanAdBody {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px;
      }
      .lutanMidLogo { width: 60px; height: 60px; border-radius: 50%; border: 2px solid #007bff; }
      .lutanMidText h3 { font-size: 16px; font-weight: 800; margin: 0; color: #222; }
      .lutanMidText p { font-size: 12px; margin: 4px 0; color: #333; }
      .lutanMidCTA {
        background: #007bff;
        color: white;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
      }
      #lutanAdWrapperMid .lutanCloseBtn {
        top: 6px;
        right: 8px;
        background: rgba(0,0,0,0.3);
        color: white;
        border: none;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        position: absolute;
      }
      #lutanAdWrapperMid .lutanCloseBtn:hover { background: rgba(0,0,0,0.5); }
    `;
    document.head.appendChild(style);
  
    // --- Close Functionality ---
    document.querySelectorAll('.lutanCloseBtn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        e.target.closest('div[id^="lutanAdWrapper"]').remove();
      });
    });
  })();
  