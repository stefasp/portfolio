// ===========================================
// GA4 Custom Event Tracking — stefspangenberg.com
// Add this script BEFORE </body>, AFTER gtag is loaded
// ===========================================

document.addEventListener('DOMContentLoaded', function () {

  // ----- HELPER -----
  function track(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // ----- 1. CASE STUDY CLICKS -----
  // These use onclick="redirectToPage('project-xxx.html')"
  // We override redirectToPage to fire an event before navigating
  var originalRedirect = window.redirectToPage;
  window.redirectToPage = function (url) {
    // Extract clean project name from URL: "project-levcapital.html" → "levcapital"
    var projectName = url.replace('project-', '').replace('.html', '');
    track('case_study_click', {
      project_name: projectName,
      link_url: url
    });
    // Small delay to let the event fire before navigation
    setTimeout(function () {
      if (typeof originalRedirect === 'function') {
        originalRedirect(url);
      } else {
        window.location.href = url;
      }
    }, 150);
  };

  // ----- 2. BEHANCE / THUMBNAIL CLICKS -----
  // These use onclick="window.open('https://www.behance.net/...')"
  document.querySelectorAll('.thumbnailList .img.clickable').forEach(function (el) {
    el.addEventListener('click', function () {
      var titleEl = el.querySelector('h3');
      var title = titleEl ? titleEl.textContent.trim() : 'unknown';
      // Try to get the behance URL from the onclick attribute
      var onclickStr = el.getAttribute('onclick') || '';
      var urlMatch = onclickStr.match(/['"]([^'"]+)['"]/);
      var url = urlMatch ? urlMatch[1] : 'unknown';
      track('thumbnail_click', {
        project_name: title,
        link_url: url,
        link_type: url.includes('behance') ? 'behance' : 'internal'
      });
    }, true); // useCapture to fire before the onclick
  });

  // ----- 3. PRIMARY CTAs -----
  // "Get in Contact" button (copies email)
  var copyBtn = document.getElementById('copyButton');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      track('cta_click', {
        cta_name: 'copy_email',
        cta_location: 'hero'
      });
    });
  }

  // "Schedule 45 min Call" button
  document.querySelectorAll('a.button.secondary').forEach(function (el) {
    if (el.href && el.href.includes('calendly')) {
      el.addEventListener('click', function () {
        track('cta_click', {
          cta_name: 'schedule_call',
          cta_location: 'hero',
          link_url: el.href
        });
      });
    }
  });

  // ----- 4. MENU NAVIGATION -----
  document.querySelectorAll('.menu-options a').forEach(function (el) {
    el.addEventListener('click', function () {
      var label = el.textContent.trim().toLowerCase().replace(/\s+/g, '_');
      var isExternal = el.target === '_blank';
      track('menu_click', {
        menu_item: label,
        link_url: el.href,
        is_external: isExternal
      });
    });
  });

  // ----- 5. CONTACT SECTION LINKS -----
  document.querySelectorAll('.contactBox .item a, .contactBox .item .linkBox').forEach(function (el) {
    el.addEventListener('click', function () {
      var text = el.textContent.trim();
      var platform = 'unknown';
      if (text.includes('linkedin')) platform = 'linkedin';
      else if (text.includes('behance')) platform = 'behance';
      else if (text.includes('dribbble')) platform = 'dribbble';
      else if (text.includes('medium')) platform = 'medium';
      else if (text.includes('mentorship') || text.includes('adplist')) platform = 'adplist';
      else if (text.includes('@gmail')) platform = 'email';
      track('contact_click', {
        platform: platform,
        link_url: el.href || 'email_display'
      });
    });
  });

  // ----- 6. LINKEDIN REVIEWS IMAGE -----
  var reviewImg = document.querySelector('.reviewContainer img');
  if (reviewImg) {
    reviewImg.addEventListener('click', function () {
      track('cta_click', {
        cta_name: 'linkedin_reviews',
        cta_location: 'contact_section'
      });
    });
  }

  // ----- 7. SCROLL DEPTH (bonus) -----
  var scrollMarks = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    var pct = Math.round((scrollTop / docHeight) * 100);
    [25, 50, 75, 100].forEach(function (mark) {
      if (pct >= mark && !scrollMarks[mark]) {
        scrollMarks[mark] = true;
        track('scroll_depth', { percent: mark });
      }
    });
  });

});
