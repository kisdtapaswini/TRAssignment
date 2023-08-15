startingWidget();
async function startingWidget(){
    const widgetID = document.currentScript.getAttribute('parentId');
    const widgetClass= "#"+widgetID;


    async function loadScripts(){
        var scriptFiles = [
            './Client/scripts/script.js',
            './Client/scripts/MedalRepo.js',
            'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'
            ];
        
            for (var i = 0; i < scriptFiles.length; i++) {
                let script = document.createElement('script');
                script.type = "text/javascript";
                script.src = scriptFiles[i];
                document.head.appendChild(script);
            }
    }
    loadSJQuery();
    async function loadSJQuery(){
            if(window.jQuery){
                init();
                setTimeout(()=>{
                    loadScripts();
                    loadStyles();
            
                }, 100);
                return ;    
            }else{
                let script = document.createElement('script');
                script.type = "text/javascript";
                script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
                document.head.appendChild(script);
                setTimeout(()=>{
                    loadSJQuery();
            
                }, 50);
            }
            
    }

    async function loadStyles(){
        var styleSheets = [
            './Client/styles/styles.css'
            ];
        
            for (var i = 0; i < styleSheets.length; i++) {
                var link = document.createElement('link');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', styleSheets[i]);
                document.head.appendChild(link);
            }
    }

    function init(){
        let baseHTML = `<div class="main-container">
        <h3 class="heading">MEDAL COUNT</h3>
      <div class="grid-container" id="container1">
        <div class="grid-header-wrapper">
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
    
          <div class="grid-item active">
            <div class="button-container" data-id="gold">
              <button class="dot dotGold" data-id="gold"></button>
            </div>
          </div>
          <div class="grid-item">
            <div class="button-container" data-id="silver">
              <button class="dot dotSilver" data-id="silver"></button>
            </div>
          </div>
          <div class="grid-item">
            <div class="button-container" data-id="bronze">
              <button class="dot dotBronze" data-id="bronze"></button>
            </div>
          </div>
          <div class="grid-item">
            <button class="asText" data-id="total">TOTAL</button>
          </div>
        </div>
      </div>
      <div class="grid-container" id="container">
      </div>
      </div>`;
      $(widgetClass).append(baseHTML);
    }
}