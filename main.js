var canvas=new fabric.Canvas(myCanvas);
player_x = 10;
 player_y = 10; 
 block_image_width = 30; 
 block_image_height = 30;
 var player_object= "";
  var block_image_object= "";
function player_update() {
     fabric.Image.fromURL("player.png", function(Img) {
     player_object = Img; 
     player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
       player_object.set({ top:player_y, left:player_x }); 
       canvas.add(player_object);
     });
     }
      function new_image(get_image) {
         fabric.Image.fromURL(get_image, function(Img) {
         block_image_object = Img;
          block_image_object.scaleToWidth(block_image_width);
           block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({ top:player_y, left:player_x });
             canvas.add(block_image_object); }); 
            }

            window.addEventListener("keydown",my_keydown);
            function my_keydown(e) {
              keyPressed=e.keyCode;
              console.log(keyPressed);
              if (e.shiftKey==true && keyPressed=='65'){
                console.log ("a and shift pressed together");
                block_image_width = block_image_width +10;
                block_image_height = block_image_height +10; 
                document.getElementById("current_width").innerHTML=block_image_width;
                document.getElementById("current_height").innerHTML=block_image_height;
              }
            
              if (e.shiftKey==true && keyPressed=='66'){
                console.log ("b and shift pressed together");
                block_image_width = block_image_width -10;
                block_image_height = block_image_height -10; 
                document.getElementById("current_width").innerHTML=block_image_width;
                document.getElementById("current_height").innerHTML=block_image_height;
              }
              
              if (keypress=='38'){
                up();
                console.log("up");
              }
            
              if (keypress=='40'){
                down();
                console.log("down");
              }
            
              if (keypress=='37'){
                left();
                console.log("left");
              }
            
              if (keypress=='39'){
                right();
                console.log("right");

                if (keypress=='67'){
                  new_image('hulk_face.png');
                  console.log("c");
                }

                if (keypress=='68'){
                  new_image('ironman_face.png');
                  console.log("d");
                }

                if (keypress=='69'){
                  new_image('spiderman_face.png');
                  console.log("e");
                }

                if (keypress=='70'){
                  new_image('thor_face.png');
                  console.log("f");
                }

                if (keypress=='71'){
                  new_image('hulkd_body.png');
                  console.log("g");
                }
                
                if (keypress=='72'){
                  new_image('ironman_body.png');
                  console.log("h");
                }

                if (keypress=='73'){
                  new_image('spiderman_body.png');
                  console.log("i");
                }

                if (keypress=='74'){
                  new_image('hulk_right_hand.png');
                  console.log("j");
                }

                if (keypress=='75'){
                  new_image('ironman_right_hand.png');
                  console.log("k");
                }

                if (keypress=='76'){
                  new_image('spiderman_right_hand.png');
                  console.log("l");
                }

                if (keypress=='77'){
                  new_image('thor_right_hand.png');
                  console.log("m");
                }

                if (keypress=='78'){
                  new_image('hulk_left_hand.png');
                  console.log("n");
                }

                if (keypress=='79'){
                  new_image('ironman_left_hand.png');
                  console.log("o");
                }

                if (keypress=='80'){
                  new_image('spiderman_left_hand.png');
                  console.log("p");
                }

                if (keypress=='81'){
                  new_image('thor_left_hand');
                  console.log("q");
                }

                if (keypress=='82'){
                  new_image('hulk_legs.png');
                  console.log("r");
                }

                if (keypress=='83'){
                  new_image('ironman_legs.png');
                  console.log("s");
                }

                if (keypress=='84'){
                  new_image('spiderman_legs.png');
                  console.log("t");
                }