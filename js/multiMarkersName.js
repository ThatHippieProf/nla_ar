//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];
var assetIDArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<4; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Transverse-Motion-'+i);
			assetIDArray.push('#asset'+i);
			//console.log(url);
		}

		for(var k=0; k<4; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding obj to each marker
			var objEl = document.createElement('a-entity');
			
			objEl.setAttribute('id','gltf-model');
			objEl.setAttribute('gtlf-model','assetIDArray[k]');
			objEl.object3D.position.set(0, 0.7, 0);
			objEl.object3D.scale.set(5, 5, 5);

			markerEl.appendChild(objEl);
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
