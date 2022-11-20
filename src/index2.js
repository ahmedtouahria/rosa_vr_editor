import * as THREE from "./three.module.js";

import { OrbitControls } from "./OrbitControls.js";
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from "./CSS3DRenderer.js";
import { DragControls } from "./DragControls.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { RGBELoader } from './RGBELoader.js';
import { RoughnessMipmapper } from './RoughnessMipmapper.js';


var container;
var camera, scene, renderer, renderer1, controls;

var objects = [];
var arryros1curv=[];
var arryros1curv1=[];
var arryros1curv2=[];
var arryros1curv3=[];


var arryrostobic=[];

var arryros2curv=[];
var arryros2curv1=[];
var arryros2curv2=[];
var arryros2curv3=[];

var changePosition = 0.1;

var mouse;


const raycaster = new THREE.Raycaster();



  var loader = new GLTFLoader();

  mouse = new THREE.Vector2();
  container = document.createElement("div");
  document.body.appendChild(container);

  // scene

  scene = new THREE.Scene();

  // camera

  camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  camera.position.set(
    0,
    0,
   600
  );


  // lights

  var light, materials;

  scene.add(new THREE.AmbientLight(0x666666));

  light = new THREE.DirectionalLight(0xdfebff, 0.1);
  light.position.set(50, 200, 100);
  light.position.multiplyScalar(1.3);

  light.castShadow = true;

  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  var d = 300;

  light.shadow.camera.left = -d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = -d;

  light.shadow.camera.far = 1000;

  scene.add(light);






document.getElementById('curverose1').addEventListener('click',curverose1);
document.getElementById('curve1rose1').addEventListener('click',curve1rose1);
document.getElementById('curve2rose1').addEventListener('click',curve2rose1);
document.getElementById('curve3rose1').addEventListener('click',curve3rose1);


document.getElementById('tobic').addEventListener('click',tobic);


// event rose2 red

document.getElementById('curverose2').addEventListener('click',curverose2);
document.getElementById('curve1rose2').addEventListener('click',curve1rose2);
document.getElementById('curve2rose2').addEventListener('click',curve2rose2);
document.getElementById('curve3rose2').addEventListener('click',curve3rose2);



  // curve



  
  function curverose1() {
    loader.load('models/rose1/curve/rose1.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose1curv"
            objects.push(child)
            arryros1curv.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }




  
  function curve1rose1() {
    loader.load('models/rose1/curve1/rose1.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose1curv1"
            objects.push(child)
            arryros1curv1.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }



  function curve2rose1() {
    loader.load('models/rose1/curve2/rose3.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose1curv2"

            objects.push(child)
            arryros1curv2.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }


  function curve3rose1() {
    loader.load('models/rose1/curve3/rose1.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose1curv3"

            objects.push(child)
            arryros1curv3.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }






  // function roses2 red






  
  function curverose2() {
    loader.load('models/rose2/curve/rose2.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose2curv"
            objects.push(child)
            arryros2curv.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }





  function curve1rose2() {
    loader.load('models/rose2/curve1/rose2.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose2curv1"
            objects.push(child)
            arryros2curv1.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }




  function curve2rose2() {
    loader.load('models/rose2/curve2/rose2.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;

            child.name="rose2curv2"
            objects.push(child)
            arryros2curv2.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }






  function curve3rose2() {
    loader.load('models/rose2/curve3/rose2.glb', function (gltff) {
      gltff.scene.children[0].traverse(function (child) {
        if (child.isMesh) {
          if(child.name=="base"){
            child.receiveShadow = true;
            child.castShadow = true;
            child.material.envMap=cubeRenderTarget.texture
            child.material.needsUpdate = true;


            child.name="rose2curv3"
            objects.push(child)
            arryros2curv3.push(child)
            scene.add(child);

          }
           

   

        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }






//tobic rose




function tobic() {
  loader.load('models/tobic/water.glb', function (gltff) {
    gltff.scene.children[0].traverse(function (child) {
      if (child.isMesh) {
        if(child.name=="base"){
          child.receiveShadow = true;
          child.castShadow = true;
          child.name="tobic"
          child.material.envMap=cubeRenderTarget.texture
          objects.push(child)
          arryrostobic.push(child)
          scene.add(child);

        }
         

 

      }

    });


  }, (xhr) => {
    
  }, (error) => {
    
  });


}



//https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap_refraction.html


  sndan()


  function sndan() {
    loader.load('models/wer.glb', function (gltffsnd) {


      //face1.glb
      
      gltffsnd.scene.children[0].traverse(function (childsndan) {
        if (childsndan.isMesh) {

          scene.add(childsndan);


        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }


water()
  function water() {
    loader.load('models/inwater.glb', function (gltffsnd) {


      //face1.glb
      
      gltffsnd.scene.children[0].traverse(function (childsndan) {
        if (childsndan.isMesh) {

          scene.add(childsndan);


        }

      });


    }, (xhr) => {
      
    }, (error) => {
      
    });


  }




  scene.updateMatrixWorld(true);
 






  renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = 0;
  renderer.domElement.style.zIndex = "1";

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;

  container.appendChild(renderer.domElement);

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  renderer.shadowMap.enabled = true;


  var controls = new OrbitControls(camera, renderer.domElement);

var cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
cubeRenderTarget.texture.type = THREE.HalfFloatType;
var cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );
  

  window.addEventListener("resize", onWindowResize, false);

  let dragControls = new DragControls(objects, camera, renderer.domElement);

     console.log("DOWN");
 
 

  dragControls.addEventListener("dragstart", function(event) {
    
//console.log(event.object.name)
//console.log(event.object.position.x)
if(event.object.name=="base" || event.object.name=="rose1curv" || event.object.name=="rose1curv1"|| event.object.name=="rose1curv2" || event.object.name=="rose1curv3" || event.object.name=="rose2curv" || event.object.name=="rose2curv1"|| event.object.name=="rose2curv2" || event.object.name=="rose2curv3" || event.object.name=="tobic"){
  dragControls.enabled=true
  controls.enabled = false;


}else{
  dragControls.enabled=false
}

  });
  dragControls.addEventListener("dragend", function(event) {
    controls.enabled = true;

  });

  dragControls.addEventListener("drag", function(event) {

    //console.log(event.object.position.x)
    document.getElementById("xpo").value=event.object.position.x;
    document.getElementById("ypo").value=event.object.position.y;
    document.getElementById("zpo").value=event.object.position.z;

 


  })






 const pmremGenerator = new THREE.PMREMGenerator(renderer);
 pmremGenerator.compileEquirectangularShader();
 new RGBELoader()
   .setDataType(THREE.UnsignedByteType)
   .setPath('textures/equirectangular/')
   .load('studio_small_08_1k.hdr', function (texture) {

     const envMap = pmremGenerator.fromEquirectangular(texture).texture;


     scene.environment = envMap;

     texture.dispose();
     pmremGenerator.dispose();

     render();
   });

 const roughnessMipmapper = new RoughnessMipmapper(renderer);





function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
 
}
var clock5=new THREE.Clock();



const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}




window.addEventListener( 'pointermove', onPointerMove );

window.requestAnimationFrame(render);


function update() {
  camera.updateProjectionMatrix();
}



let INTERSECTED;

renderer.domElement.addEventListener('click', ray, true);

function ray(){

  raycaster.setFromCamera( pointer, camera );

  const intersects = raycaster.intersectObjects( scene.children );
  if(intersects.length>0){
  
    console.log("lllll")
    if ( INTERSECTED = intersects[ 0 ].object ) {
      document.getElementById("rox").addEventListener('input',function(){
        INTERSECTED.rotation.x=document.getElementById("rox").value*0.01;
        document.getElementById("valrox").value=INTERSECTED.rotation.x;

      })

      document.getElementById("roy").addEventListener('input',function(){
        INTERSECTED.rotation.y=document.getElementById("roy").value;
        document.getElementById("valroy").value=INTERSECTED.rotation.y;

      })

      document.getElementById("roz").addEventListener('input',function(){
        INTERSECTED.rotation.z=document.getElementById("roz").value*0.01;
        document.getElementById("valroz").value=INTERSECTED.rotation.z;

      })

      document.getElementById('del').addEventListener('click',function(){
        scene.remove(INTERSECTED)
      })



console.log("kkk")
      }
    

}
}

//
animate();

function animate() {
  requestAnimationFrame(animate);


  /*
  if(mixer){

    mixer.update(clock5.getDelta());
    
    }
    */
  update();
  render();
  
}

function render() {
   
  renderer.render(scene, camera);

 
}

document.getElementById("getarry")?.addEventListener("click",function(){
for (let index = 0; index <  arryros1curv.length; index++) {
  console.log("name : "+arryros1curv[index].name+" positionX: "+arryros1curv[index].position.x+" positinY: "+arryros1curv[index].position.y+" positinZ: "+arryros1curv[index].position.z+" rotationX: "+arryros1curv[index].rotation.x+" rotationY: "+arryros1curv[index].rotation.y+" rotationZ: "+arryros1curv[index].rotation.z)
  
}


for (let index = 0; index <  arryros1curv1.length; index++) {
  console.log("name : "+arryros1curv1[index].name+" positionX: "+arryros1curv1[index].position.x+" positinY: "+arryros1curv1[index].position.y+" positinZ: "+arryros1curv1[index].position.z+" rotationX: "+arryros1curv1[index].rotation.x+" rotationY: "+arryros1curv1[index].rotation.y+" rotationZ: "+arryros1curv1[index].rotation.z)
  
}

for (let index = 0; index <  arryros1curv2.length; index++) {
  console.log("name : "+arryros1curv2[index].name+" positionX: "+arryros1curv2[index].position.x+" positinY: "+arryros1curv2[index].position.y+" positinZ: "+arryros1curv2[index].position.z+" rotationX: "+arryros1curv2[index].rotation.x+" rotationY: "+arryros1curv2[index].rotation.y+" rotationZ: "+arryros1curv2[index].rotation.z)
  
}

for (let index = 0; index <  arryros1curv3.length; index++) {
  console.log("name : "+arryros1curv3[index].name+" positionX: "+arryros1curv3[index].position.x+" positinY: "+arryros1curv3[index].position.y+" positinZ: "+arryros1curv3[index].position.z+" rotationX: "+arryros1curv3[index].rotation.x+" rotationY: "+arryros1curv3[index].rotation.y+" rotationZ: "+arryros1curv3[index].rotation.z)
  
}

// rose2



for (let index = 0; index <  arryros2curv.length; index++) {
  console.log("name : "+arryros2curv[index].name+" positionX: "+arryros2curv[index].position.x+" positinY: "+arryros2curv[index].position.y+" positinZ: "+arryros2curv[index].position.z+" rotationX: "+arryros2curv[index].rotation.x+" rotationY: "+arryros2curv[index].rotation.y+" rotationZ: "+arryros2curv[index].rotation.z)
  
}


for (let index = 0; index <  arryros2curv1.length; index++) {
  console.log("name : "+arryros2curv1[index].name+" positionX: "+arryros2curv1[index].position.x+" positinY: "+arryros2curv1[index].position.y+" positinZ: "+arryros2curv1[index].position.z+" rotationX: "+arryros2curv1[index].rotation.x+" rotationY: "+arryros2curv1[index].rotation.y+" rotationZ: "+arryros2curv1[index].rotation.z)
  
}

for (let index = 0; index <  arryros2curv2.length; index++) {
  console.log("name : "+arryros2curv2[index].name+" positionX: "+arryros2curv2[index].position.x+" positinY: "+arryros2curv2[index].position.y+" positinZ: "+arryros2curv2[index].position.z+" rotationX: "+arryros2curv2[index].rotation.x+" rotationY: "+arryros2curv2[index].rotation.y+" rotationZ: "+arryros2curv2[index].rotation.z)
  
}

for (let index = 0; index <  arryros2curv3.length; index++) {
  console.log("name : "+arryros2curv3[index].name+" positionX: "+arryros2curv3[index].position.x+" positinY: "+arryros2curv3[index].position.y+" positinZ: "+arryros2curv3[index].position.z+" rotationX: "+arryros2curv3[index].rotation.x+" rotationY: "+arryros2curv3[index].rotation.y+" rotationZ: "+arryros2curv3[index].rotation.z)
  
}



for (let index = 0; index <  arryrostobic.length; index++) {
  console.log("name : "+arryrostobic[index].name+" positionX: "+arryrostobic[index].position.x+" positinY: "+arryrostobic[index].position.y+" positinZ: "+arryrostobic[index].position.z+" rotationX: "+arryrostobic[index].rotation.x+" rotationY: "+arryrostobic[index].rotation.y+" rotationZ: "+arryrostobic[index].rotation.z)
  
}

})


