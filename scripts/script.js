        // ganti color
        const bgColorSelector = document.getElementById('bg-color');
        bgColorSelector.addEventListener('change', function() {
            document.body.style.backgroundColor = this.value;
        });

        // text size
        const fontSizeSlider = document.getElementById('font-size');
        fontSizeSlider.addEventListener('input', function() {
        document.documentElement.style.fontSize = this.value + 'px'; // Change root font-size
        });


        // tombol dark mode
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });

        // ganti font
        const serifFontButton = document.getElementById('serif-font');
        const sansSerifFontButton = document.getElementById('sans-serif-font');
        const container = document.getElementById('mainContainer');

        serifFontButton.addEventListener('click', function() {
            container.classList.remove('sans-serif');
            container.classList.add('serif');
        });

        sansSerifFontButton.addEventListener('click', function() {
            container.classList.remove('serif');
            container.classList.add('sans-serif');
        });