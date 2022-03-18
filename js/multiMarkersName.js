//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];
var imagesURLArray=[];
var imagesNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<19; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		//list of the images
		for(var p=1; p<19; p++)
		{
			var url="img/Image_"+p+".png";
			imagesURLArray.push(url);
			imagesNameArray.push('Image_'+p);
			//console.log(url);
		}

		for(var k=0; k<18; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding images to each marker
			var imageEl = document.createElement('a-image');
			
			imageEl.setAttribute('id',imagesNameArray[k]);
			imageEl.setAttribute('src',imagesURLArray[k]);
			imageEl.setAttribute('look-at','[camera]');
			imageEl.setAttribute('width','3');
			imageEl.setAttribute('height','3');
			imageEl.object3D.position.set(0, 2.5, 0);

			markerEl.appendChild(imageEl);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
