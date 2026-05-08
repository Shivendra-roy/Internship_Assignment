/* ------------------------------------------------------------------
       Sidebar open / close helpers
       ------------------------------------------------------------------ */

    /**
     * Open the mobile sidebar drawer.
     * Adds .open class to drawer + overlay, locks body scroll,
     * and updates the hamburger's aria-expanded attribute.
     */
    function openSidebar() {
      const sidebar  = document.getElementById('sidebar');
      const overlay  = document.getElementById('overlay');
      const btn      = document.getElementById('hamburgerBtn');

      sidebar.classList.add('open');
      overlay.classList.add('open');
      sidebar.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');

      /* Prevent background page scrolling while drawer is open */
      document.body.style.overflow = 'hidden';
    }

    /**
     * Close the mobile sidebar drawer.
     */
    function closeSidebar() {
      const sidebar  = document.getElementById('sidebar');
      const overlay  = document.getElementById('overlay');
      const btn      = document.getElementById('hamburgerBtn');

      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      sidebar.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');

      document.body.style.overflow = '';
    }

    /* ------------------------------------------------------------------
       Keyboard accessibility: close sidebar with Escape key
       ------------------------------------------------------------------ */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSidebar();
    });

    /* ------------------------------------------------------------------
       Auto-close sidebar when viewport expands above mobile breakpoint
       (e.g., user rotates device or resizes browser)
       ------------------------------------------------------------------ */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeSidebar();
    });

