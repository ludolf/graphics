var createScene = function(engine, canvas) {
    
    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Gray();

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2 - 0.15, 2, BABYLON.Vector3.Zero(), scene);
    //var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2 + 0.05, Math.PI / 2 - 0.2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(-1, 2, 5), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(1, 1, -1), scene);

    // Materials and colors

    var blue = new BABYLON.SimpleMaterial("blue", scene);
    blue.alpha = 1.0;
    blue.diffuseColor = new BABYLON.Color3(57 / 255, 162 / 255, 198 / 255);

    var steel = new BABYLON.SimpleMaterial("steel", scene);
    steel.alpha = 1.0;
    steel.diffuseColor = new BABYLON.Color3(159 / 255, 197 / 255, 232 / 255);

    var white = new BABYLON.CellMaterial("white", scene);
    white.alpha = 1.0;
    white.diffuseColor = new BABYLON.Color3(1, 1, 1);

    var black = new BABYLON.CellMaterial("black", scene);
    black.alpha = 1.0;
    black.diffuseColor = new BABYLON.Color3(67 / 255, 67 / 255, 67 / 255);

    var eyeBlue = new BABYLON.StandardMaterial("eyeBlue", scene);
    eyeBlue.alpha = 1.0;
    eyeBlue.diffuseColor = new BABYLON.Color3(109 / 255, 158 / 255, 235 / 255);

    var eyeBlack = new BABYLON.StandardMaterial("eyeBlack", scene);
    eyeBlack.alpha = 1.0;
    eyeBlack.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);

    // Add and manipulate meshes in the scene

    var head = BABYLON.MeshBuilder.CreateSphere("head", {
        diameter: 0.55, diameterY: 0.49
    }, scene);
    head.position = new BABYLON.Vector3(0, 0.27, 0);
    head.material = blue;

    var neck = BABYLON.Mesh.CreateTube("neck", [
        new BABYLON.Vector3(0, 0.2, 0), 
        new BABYLON.Vector3(0, 0.16, 0)
    ], 0.2630, 64, null, 0, scene, false); 
    neck.material = black;

    var leftEyeOut = BABYLON.MeshBuilder.CreateSphere("leftEyeOut", {
        diameter: 0.15, slice: 0.78
    }, scene);
    leftEyeOut.position = new BABYLON.Vector3(0.09, 0.32, 0.22);
    leftEyeOut.rotate(BABYLON.Axis.X, -Math.PI / 2, BABYLON.Space.LOCAL);
    leftEyeOut.material = white;

    var leftEyeBlue = BABYLON.MeshBuilder.CreateSphere("leftEyeBlue", {
        diameter: 0.15, slice: 0.22
    }, scene);
    leftEyeBlue.position = new BABYLON.Vector3(0.09, 0.32, 0.22);
    leftEyeBlue.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
    leftEyeBlue.material = eyeBlue;    

    var leftEyeBlack = BABYLON.MeshBuilder.CreateSphere("leftEyeBlack", {
        diameter: 0.15, slice: 0.1
    }, scene);
    leftEyeBlack.position = new BABYLON.Vector3(0.09, 0.32, 0.221);
    leftEyeBlack.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
    leftEyeBlack.material = eyeBlack;

    var rightEyeOut = BABYLON.MeshBuilder.CreateSphere("rightEyeOut", {
        diameter: 0.15, slice: 0.78
    }, scene);
    rightEyeOut.position = new BABYLON.Vector3(-0.09, 0.32, 0.22);
    rightEyeOut.rotate(BABYLON.Axis.X, -Math.PI / 2, BABYLON.Space.LOCAL);
    rightEyeOut.material = white; 

    var rightEyeBlue = BABYLON.MeshBuilder.CreateSphere("rightEyeBlue", {
        diameter: 0.15, slice: 0.22
    }, scene);
    rightEyeBlue.position = new BABYLON.Vector3(-0.09, 0.32, 0.22);
    rightEyeBlue.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
    rightEyeBlue.material = eyeBlue;   

    var rightEyeBlack = BABYLON.MeshBuilder.CreateSphere("rightEyeBlack", {
        diameter: 0.15, slice: 0.1
    }, scene);
    rightEyeBlack.position = new BABYLON.Vector3(-0.09, 0.32, 0.221);
    rightEyeBlack.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.LOCAL);
    rightEyeBlack.material = eyeBlack; 

    var leftEyeBrown = BABYLON.Mesh.CreateTube("leftEyeBrown", [
        new BABYLON.Vector3(0, 0, 0.01),
        new BABYLON.Vector3(0.1, -0.02, -0.01)
    ], 0.01, 32, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    leftEyeBrown.material = black;
    leftEyeBrown.position = new BABYLON.Vector3(0.04, 0.425, 0.22);

    var rightEyeBrown = BABYLON.Mesh.CreateTube("rightEyeBrown", [
        new BABYLON.Vector3(0, 0, 0.01),
        new BABYLON.Vector3(-0.1, -0.02, -0.01)
    ], 0.01, 32, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    rightEyeBrown.material = black;
    rightEyeBrown.position = new BABYLON.Vector3(-0.04, 0.425, 0.22);

    var nose = BABYLON.MeshBuilder.CreateSphere("nose", {
        diameter: 0.05
    }, scene);
    nose.position = new BABYLON.Vector3(0, 0.28, 0.275);
    nose.material = black;    

    var smile = BABYLON.Mesh.CreateTube("smile", [
        new BABYLON.Vector3(-0.075, 0, 0.01), 
        new BABYLON.Vector3(-0.04, -0.012, 0.015), 
        new BABYLON.Vector3(0.0, -0.015, 0.017),
        new BABYLON.Vector3(0.04, -0.012, 0.015), 
        new BABYLON.Vector3(0.075, 0, 0.01)
    ], 0.01, 32, null, 0, scene, false); 
    smile.material = black;
    smile.position = new BABYLON.Vector3(0, 0.24, 0.26);

    var smileLeft = BABYLON.MeshBuilder.CreateSphere("smileLeft", {
        diameter: 0.02
    }, scene);
    smileLeft.position = new BABYLON.Vector3(0.075, 0.24, 0.27);
    smileLeft.material = black;  

    var smileRight = BABYLON.MeshBuilder.CreateSphere("smileRight", {
        diameter: 0.02
    }, scene);
    smileRight.position = new BABYLON.Vector3(-0.075, 0.24, 0.27);
    smileRight.material = black;  

    var antenePoint = BABYLON.MeshBuilder.CreateSphere("antenePoint", {
        diameter: 0.08
    }, scene);
    antenePoint.position = new BABYLON.Vector3(0, 0.6, 0);
    antenePoint.material = black;

    var anteneStick = BABYLON.Mesh.CreateTube("anteneStick", [
        new BABYLON.Vector3(0, 0.5, 0), 
        new BABYLON.Vector3(0, 0.6, 0)
    ], 0.01, 32, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    anteneStick.material = black;
 
    var leftArm = BABYLON.Mesh.CreateTube("leftArm", [
        new BABYLON.Vector3(-0.1, 0.09, 0), 
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0.054, -0.12, 0)
    ], 0.045, 32, null, 0, scene, false); 
    leftArm.position = new BABYLON.Vector3(0.32, 0.01, 0); 
    leftArm.material = black;

    var leftHand = BABYLON.MeshBuilder.CreateSphere("leftHand", {
        diameter: 0.17
    }, scene);
    leftHand.position = new BABYLON.Vector3(0.37, -0.15, 0);   
    leftHand.material = blue;

    var rightArm = BABYLON.Mesh.CreateTube("rightArm", [
        new BABYLON.Vector3(0.1, 0.09, 0), 
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(-0.054, -0.12, 0)
    ], 0.045, 32, null, 0, scene, false); 
    rightArm.position = new BABYLON.Vector3(-0.32, 0.01, 0); 
    rightArm.material = black;

    var rightHand = BABYLON.MeshBuilder.CreateSphere("rightHand", {
        diameter: 0.17
    }, scene);
    rightHand.position = new BABYLON.Vector3(-0.37, -0.15, 0); 
    rightHand.material = blue;

    var leftRingTop = BABYLON.Mesh.CreateTube("leftRingTop", [
        new BABYLON.Vector3(0, 0.0, 0), 
        new BABYLON.Vector3(0, 0.012, 0)
    ], 0.05, 64, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    leftRingTop.rotate(BABYLON.Axis.Z, -2.4, BABYLON.Space.LOCAL);
    leftRingTop.position = new BABYLON.Vector3(0.31, 0.02, 0); 
    leftRingTop.material = steel;

    var leftRingBottom = BABYLON.Mesh.CreateTube("leftRingBottom", [
        new BABYLON.Vector3(0, 0.0, 0), 
        new BABYLON.Vector3(0, 0.012, 0)
    ], 0.05, 64, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    leftRingBottom.rotate(BABYLON.Axis.Z, -2.7, BABYLON.Space.LOCAL);
    leftRingBottom.position = new BABYLON.Vector3(0.33, -0.01, 0); 
    leftRingBottom.material = steel;

    var rightRingTop = BABYLON.Mesh.CreateTube("rightRingTop", [
        new BABYLON.Vector3(0, 0.0, 0), 
        new BABYLON.Vector3(0, 0.012, 0)
    ], 0.05, 64, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    rightRingTop.rotate(BABYLON.Axis.Z, 2.4, BABYLON.Space.LOCAL);
    rightRingTop.position = new BABYLON.Vector3(-0.31, 0.02, 0); 
    rightRingTop.material = steel;

    var rightRingBottom = BABYLON.Mesh.CreateTube("rightRingBottom", [
        new BABYLON.Vector3(0, 0.0, 0), 
        new BABYLON.Vector3(0, 0.012, 0)
    ], 0.05, 64, null, 0, scene, false, BABYLON.Mesh.DOUBLESIDE); 
    rightRingBottom.rotate(BABYLON.Axis.Z, 2.7, BABYLON.Space.LOCAL);
    rightRingBottom.position = new BABYLON.Vector3(-0.33, -0.01, 0); 
    rightRingBottom.material = steel;

    var leftLeg = BABYLON.Mesh.CreateTube("leftLeg", [
        new BABYLON.Vector3(0, 0.12, 0), 
        new BABYLON.Vector3(0, 0.0, 0)
    ], 0.065, 32, null, 0, scene, false); 
    leftLeg.position = new BABYLON.Vector3(0.14, -0.3, 0); 
    leftLeg.material = black;

    var leftFoot = BABYLON.MeshBuilder.CreateSphere("leftFoot", {
        diameter: 0.2, diameterX: 0.22, slice: 0.5, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    leftFoot.position = new BABYLON.Vector3(0.14, -0.37, 0); 
    leftFoot.material = blue;

    var rightLeg = BABYLON.Mesh.CreateTube("rightLeg", [
        new BABYLON.Vector3(0, 0.12, 0), 
        new BABYLON.Vector3(0, 0.0, 0)
    ], 0.065, 32, null, 0, scene, false); 
    rightLeg.position = new BABYLON.Vector3(-0.14, -0.3, 0); 
    rightLeg.material = black;

    var rightFoot = BABYLON.MeshBuilder.CreateSphere("rightFoot", {
        diameter: 0.2, diameterX: 0.22, slice: 0.5, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    rightFoot.position = new BABYLON.Vector3(-0.14, -0.37, 0);
    rightFoot.material = blue;

    body(scene, blue);

    plate(scene, black);

    return scene;
};

function body(scene, blue) {

    var leftTopTube = BABYLON.Mesh.CreateTube("leftTopTube", [
        new BABYLON.Vector3(0, 0, 0), 
        new BABYLON.Vector3(0, 0, 0.525)
    ], 0.03, 32, null, 3, scene, false); 
    leftTopTube.position = new BABYLON.Vector3(0.253, 0.13, -0.2625); 
    leftTopTube.material = blue; 

    var rightTopTube = BABYLON.Mesh.CreateTube("rightTopTube", [
        new BABYLON.Vector3(0, 0, 0), 
        new BABYLON.Vector3(0, 0, 0.525)
    ], 0.03, 32, null, 3, scene, false); 
    rightTopTube.position = new BABYLON.Vector3(-0.253, 0.13, -0.2625); 
    rightTopTube.material = blue; 
    
    var leftBottomTube = BABYLON.Mesh.CreateTube("leftBottomTube", [
        new BABYLON.Vector3(0, 0, 0), 
        new BABYLON.Vector3(0, 0, 0.525)
    ], 0.05, 32, null, 3, scene, false); 
    leftBottomTube.position = new BABYLON.Vector3(0.2325, -0.14, -0.2625); 
    leftBottomTube.material = blue;

    var rightBottomTube = BABYLON.Mesh.CreateTube("rightBottomTube", [
        new BABYLON.Vector3(0, 0, 0), 
        new BABYLON.Vector3(0, 0, 0.525)
    ], 0.05, 32, null, 3, scene, false); 
    rightBottomTube.position = new BABYLON.Vector3(-0.2325, -0.14, -0.2625); 
    rightBottomTube.material = blue; 


    var topPlate = BABYLON.MeshBuilder.CreatePlane("topPlate", {
        height: 0.525, width: 0.505, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    topPlate.rotate(BABYLON.Axis.X, -Math.PI / 2, BABYLON.Space.LOCAL);
    topPlate.position = new BABYLON.Vector3(0, 0.16, 0); 
    topPlate.material = blue;

    var bottomPlate = BABYLON.MeshBuilder.CreatePlane("bottomPlate", {
        height: 0.525, width: 0.475, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    bottomPlate.rotate(BABYLON.Axis.X, -Math.PI / 2, BABYLON.Space.LOCAL);
    bottomPlate.position = new BABYLON.Vector3(0, -0.19, 0); 
    bottomPlate.material = blue;

    var leftPlate = BABYLON.MeshBuilder.CreatePlane("leftPlate", {
        height: 0.285, width: 0.525, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    leftPlate.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
    leftPlate.position = new BABYLON.Vector3(0.2825, -0.005, 0); 
    leftPlate.material = blue;

    var rightPlate = BABYLON.MeshBuilder.CreatePlane("rightPlate", {
        height: 0.285, width: 0.525, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    rightPlate.rotate(BABYLON.Axis.Y, -Math.PI / 2, BABYLON.Space.LOCAL);
    rightPlate.position = new BABYLON.Vector3(-0.2825, -0.005, 0); 
    rightPlate.material = blue;

    var frontXPlate = BABYLON.MeshBuilder.CreatePlane("frontXPlate", {
        height: 0.27, width: 0.565, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    frontXPlate.position = new BABYLON.Vector3(0, -0.005, 0.2625); 
    frontXPlate.material = blue;

    var frontYTopPlate = BABYLON.MeshBuilder.CreatePlane("frontYTopPlate", {
        height: 0.03, width: 0.505, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    frontYTopPlate.position = new BABYLON.Vector3(0, 0.145, 0.2625); 
    frontYTopPlate.material = blue;

    var frontYBottomPlate = BABYLON.MeshBuilder.CreatePlane("frontYBottomPlate", {
        height: 0.05, width: 0.465, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    frontYBottomPlate.position = new BABYLON.Vector3(0, -0.165, 0.2625); 
    frontYBottomPlate.material = blue;

    var backXPlate = BABYLON.MeshBuilder.CreatePlane("backXPlate", {
        height: 0.27, width: 0.565, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    backXPlate.position = new BABYLON.Vector3(0, -0.005, -0.2625); 
    backXPlate.material = blue;

    var backYTopPlate = BABYLON.MeshBuilder.CreatePlane("backYTopPlate", {
        height: 0.03, width: 0.505, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    backYTopPlate.position = new BABYLON.Vector3(0, 0.145, -0.2625); 
    backYTopPlate.material = blue;

    var backYBottomPlate = BABYLON.MeshBuilder.CreatePlane("backYBottomPlate", {
        height: 0.05, width: 0.465, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    backYBottomPlate.position = new BABYLON.Vector3(0, -0.165, -0.2625); 
    backYBottomPlate.material = blue;
}

function plate(scene, black_) {
    var black = new BABYLON.StandardMaterial("plateBlack", scene);
    black.alpha = 1.0;
    black.diffuseColor = new BABYLON.Color3(40 / 255, 40 / 255, 40 / 255);

    var yellow = new BABYLON.StandardMaterial("plateYellow", scene);
    yellow.alpha = 1.0;
    yellow.diffuseColor = new BABYLON.Color3(255 / 255, 229 / 255, 153 / 255);

    var red = new BABYLON.StandardMaterial("plateRed", scene);
    red.alpha = 1.0;
    red.diffuseColor = new BABYLON.Color3(204 / 255, 88 / 255, 88 / 255);

    var mainTableDiscTL = BABYLON.MeshBuilder.CreateDisc("mainTableDiscTL", {
        radius: 0.02, tessellation: 32, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableDiscTL.position = new BABYLON.Vector3(0.2225, 0.03, 0.2626);
    mainTableDiscTL.material = black; 

    var mainTableDiscTR = BABYLON.MeshBuilder.CreateDisc("mainTableDiscTR", {
        radius: 0.02, tessellation: 32, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableDiscTR.position = new BABYLON.Vector3(-0.2225, 0.03, 0.2626);
    mainTableDiscTR.material = black; 

    var mainTableDiscBL = BABYLON.MeshBuilder.CreateDisc("mainTableDiscBL", {
        radius: 0.02, tessellation: 32, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableDiscBL.position = new BABYLON.Vector3(0.2225, -0.05, 0.2626);
    mainTableDiscBL.material = black; 

    var mainTableDiscBR = BABYLON.MeshBuilder.CreateDisc("mainTableDiscBR", {
        radius: 0.02, tessellation: 32, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableDiscBR.position = new BABYLON.Vector3(-0.2225, -0.05, 0.2626);
    mainTableDiscBR.material = black; 

    var mainTableX = BABYLON.MeshBuilder.CreatePlane("mainTableX", {
        height: 0.08, width: 0.485, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableX.position = new BABYLON.Vector3(0, -0.01, 0.2626); 
    mainTableX.material = black;

    var mainTableY = BABYLON.MeshBuilder.CreatePlane("mainTableY", {
        height: 0.12, width: 0.445, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    mainTableY.position = new BABYLON.Vector3(0, -0.01, 0.2626); 
    mainTableY.material = black;


    var leftTable = BABYLON.MeshBuilder.CreatePlane("leftTable", {
        height: 0.05, width: 0.25, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    leftTable.position = new BABYLON.Vector3(0.1, -0.12, 0.2626); 
    leftTable.material = black;

    var middleTable = BABYLON.MeshBuilder.CreatePlane("middleTable", {
        height: 0.05, width: 0.05, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    middleTable.position = new BABYLON.Vector3(-0.067, -0.12, 0.2626); 
    middleTable.material = black;

    var rightTable = BABYLON.MeshBuilder.CreatePlane("rightTable", {
        height: 0.05, width: 0.12, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    rightTable.position = new BABYLON.Vector3(-0.17, -0.12, 0.2626); 
    rightTable.material = yellow;

    var leftButton = BABYLON.MeshBuilder.CreatePlane("leftButton", {
        height: 0.06, width: 0.06, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    leftButton.position = new BABYLON.Vector3(0.19, 0.1, 0.2626); 
    leftButton.material = red;

    var triangleButton = BABYLON.Mesh.CreateRibbon("triangleButton", [[
        new BABYLON.Vector3(0.0, 0.06, 0.), 
        new BABYLON.Vector3(-0.035, 0.0, 0.0),
        new BABYLON.Vector3(0.035, 0.0, 0.0)
    ]], true, false, 0, scene);
    triangleButton.position = new BABYLON.Vector3(0.1, 0.071, 0.2626); 
    triangleButton.material = yellow;


    var logoPlane = BABYLON.MeshBuilder.CreatePlane("logoPlane", {
        height: 0.07, width: 0.08, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene);
    logoPlane.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
    logoPlane.position = new BABYLON.Vector3(-0.17, 0.1, 0.2626); 

	var logoTexture = new BABYLON.DynamicTexture("logoTexture", {
        width: 256, height: 190
    }, scene); 
	
	var logoMaterial = new BABYLON.SimpleMaterial("logoMaterial", scene);    				
	logoMaterial.diffuseTexture = logoTexture;
	logoPlane.material = logoMaterial;
	
    //Add text to dynamic texture
    var font = "bold 376px georgia";
    logoTexture.drawText("π", 0, 190, font, "#434343", "#39a2c6", true, true);
}