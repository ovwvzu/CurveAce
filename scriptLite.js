var launchScript = function( handleFs, orientationGame, disableOrintation){
	var SCRIPT_VERSION = "1.0.2";
	
	
	
	var HANDLE_FS = handleFs != undefined ? handleFs : true;
	
	 
	function multipleEventsListeners(events, func, elem) {
		elem = elem || document;
		var event = events.split(' ');
		for (var i = 0; i < event.length; i++) {
			elem.addEventListener(event[i], func, false);
	    }
	}

	if ( disableOrintation == undefined || !disableOrintation )
	{
		var KEEP_LANDSCARE = orientationGame != undefined ? orientationGame : true;
		var isLandscapeMode = window.innerWidth > window.innerHeight;
		var events = "load resize";
		multipleEventsListeners(events, orientationCheck, window) 
		function orientationCheck() {
			if (!isMobile(true))
			{
				return;
			}else{
				if(!document.getElementById("orientationLayer")){
					createOrientationAlert();
					if (!KEEP_LANDSCARE) 
						showOrientationAlert();		
				}						
			}
		};
		
		function checkOrientation() {
			var angle = window.orientation != undefined ? window.orientation : screen.orientation.angle != undefined ? screen.orientation.angle : window.screen.orientation.angle;
			if(!document.getElementById("orientationLayer")){
				createOrientationAlert();
			}	
			if(KEEP_LANDSCARE ? angle == 0 : ( angle == 90 || angle == -90) ){
				showOrientationAlert();
			}else{
				hideOrientationAlert();
			}
		}

		window.addEventListener("orientationchange", checkOrientation, false);
	}

	function  isMobile(keepIos) 
	{
		return (function (a) 
		{
			var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
			if (!keepIos && iOS)
				return false;
			if (iOS || /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|playbook|silk/i.test(a) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
				return true;
			} else {
				return false;
			}
		})(navigator.userAgent || navigator.vendor || window.opera);
		return true;
	}
	
	function showOrientationAlert(){
		orientationLayer.style.display = "block";
	}
	function hideOrientationAlert(){
		orientationLayer.style.display = "none";
	}

	function createOrientationAlert(){
		var orientationLayer = document.createElement("div"),
			orientationImg = document.createElement("div"),
			url = KEEP_LANDSCARE ? "url('turnit_to_landscape.png')" : "url('turnit_to_portrait.png')";
		orientationImg.style.backgroundImage = url;
		orientationImg.style.backgroundColor = "black";
		orientationImg.style.width = KEEP_LANDSCARE ? "100%" : Math.max( window.innerHeight, window.innerWidth )+ "px";
		orientationImg.style.height = !KEEP_LANDSCARE ? "100%" : Math.max( window.innerHeight, window.innerWidth )+ "px"
		orientationImg.style.backgroundRepeat = "no-repeat";
		orientationImg.style.backgroundSize = "contain";
		orientationImg.style.backgroundPosition = "center";
		orientationLayer.id = "orientationLayer";
		orientationLayer.style.width = KEEP_LANDSCARE ? "100%" : Math.max( screen.height, screen.width )+ "px";
		orientationLayer.style.height = !KEEP_LANDSCARE ? "100%" : Math.max( screen.height, screen.width )+ "px";
		orientationLayer.style.position = "absolute";
		orientationLayer.style.top = 0;
		orientationLayer.style.left = 0;
		orientationLayer.style.right = 0;
		orientationLayer.style.bottom = 0;
		orientationLayer.style.backgroundColor = "black";
		orientationLayer.style.display = "none";
		document.body.appendChild(orientationLayer);
		orientationLayer.appendChild(orientationImg);
	}
	
	function isWebivew()
	{
		return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
	}
	
	function isiOS()
	{
		return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);;
	}
	
	window.addEventListener("resize", resize);
	function resize()
	{
		if (isMobile(true))
			checkOrientation();
		if ( !HANDLE_FS )
			return;

		if (localStorage.getItem("fs_size") != null)
		{
			var fs_size = JSON.parse(localStorage.getItem("fs_size"));
			if (fs_size)
			{
				if (Math.max(fs_size.scrw, fs_size.scrh) != Math.max(window.innerWidth, window.innerHeight) ||
					Math.min(fs_size.scrw, fs_size.scrh) != Math.min(window.innerWidth, window.innerHeight))
				{
					if (!document.getElementById("container_fullscreen")) {
						document.body.appendChild(overlay);
					}	
				}

				if (Math.max(fs_size.scrw, fs_size.scrh) < Math.max(window.innerWidth, window.innerHeight) ||
					Math.min(fs_size.scrw, fs_size.scrh) < Math.min(window.innerWidth, window.innerHeight))
				{
					var fs_size = {
						scrw : window.innerWidth,
						scrh : window.innerHeight
					};
					localStorage.setItem("fs_size", JSON.stringify(fs_size));
				}
			}
		}
	};
	
	
	if ( HANDLE_FS ) 
	{
		var height = screen.height;
		var overlay = document.createElement("div");
		overlay.id = "container_fullscreen";
		overlay.style.width = "100%";
		overlay.style.height = height + "px";;
		overlay.style.position = "absolute";
		overlay.style.top = 0;
		overlay.style.bottom = 0;
		overlay.style.zIndex = 2000;
		var timeoutVarClick;
		var timeoutVarTouch;

		var agent = navigator.userAgent;
		if (isMobile(false) && !isiOS() && !agent.includes("; wv)") && !isWebivew() ) {
			document.body.appendChild(overlay);
		}
		
		var fullscreen = function () {
			if (mf.mozRequestFullScreen)
				mf.mozRequestFullScreen();
			else if (mf.webkitRequestFullScreen) 
				mf.webkitRequestFullScreen();
		}
		
		function fullscreenChanged() {
			if (!document.getElementById("container_fullscreen")) {
				document.body.appendChild(overlay);
			}
			
			overlay.style.display = "none";
			if (document.webkitFullscreenElement == null) {
				localStorage.setItem("fs_size", null);
				overlay.style.display = "block";
				clearTimeout(timeoutVarClick);
				clearTimeout(timeoutVarTouch);
				overlay.style.zIndex = 2000;
				if (customStopFullScreen)
					customStopFullScreen();
			}
			else
			{
				var fs_size = {
					scrw : window.innerWidth,
					scrh : window.innerHeight
				};
				localStorage.setItem("fs_size", JSON.stringify(fs_size));
			}
		}
		
		overlay.addEventListener("click", onClick);
		
		function onClick()
		{
			mf = document.body;
			fullscreen();
			timeoutVarClick = setTimeout(function () {
				overlay.style.zIndex = -1
			}, 1500);
		};

		overlay.addEventListener("touchstart", touchstart);
		function touchstart()
		{
			mf = document.body;
			fullscreen();
			timeoutVarTouch = setTimeout(function () {
				overlay.style.zIndex = -1
			}, 1500);
		};

		document.addEventListener("fullscreenchange", fullscreenchange, false);
		function fullscreenchange ()
		{
			overlay.style.display = "none";
			fullscreenChanged();
		};

		document.addEventListener("mozfullscreenchange", mozfullscreenchange, false);
		function mozfullscreenchange()
		{
			overlay.style.display = "none";
			fullscreenChanged();
		};

		document.addEventListener("webkitfullscreenchange", webkitfullscreenchange, false);
		function webkitfullscreenchange()
		{
			overlay.style.display = "none";
			fullscreenChanged();
		};

		document.addEventListener("msfullscreenchange", msfullscreenchange, false);
		function msfullscreenchange ()
		{
			overlay.style.display = "none";
			fullscreenChanged();
		};
		
		function preventDefault( e )
		{
			e.preventDefault();
		};
		
		window.addEventListener('gesturestart', preventDefault, false);
		window.addEventListener('gesturechange', preventDefault, false);
		window.addEventListener('gestureend', preventDefault, false); 
	}
}
