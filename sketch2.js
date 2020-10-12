function setup() {
  let mycanvas =createCanvas(800, 500);
  textSize(28); 


  
}

let i=10;
let k=-10;//move speed for - moves;
let v =+10; //move speed for + moves;
let state=1;//state 1 = moveY- state2=moveX+ state3=moveY+ state4=moveX-
let move_state=1;
let isstarted=false;
let move=[];// from  distination to target
let disks_tower1=[];
let disks_tower2=[];
let disks_tower3=[];
let disk_number=3;
function draw(){
  background(220)
    push();
  fill(55);
  rect(100,275,5,450);
  rect(300,275,5,450);
  rect(500,275,5,450);
  pop();
  rect(i,3,40,40);
  i+=5;
  if(i>500)
    i=10;
    
    rectMode(CENTER);
    push()
  for(j=0;j<disks_tower1.length;j++)
      disks_tower1[j].display();
      pop()
      push()
  for(j=0;j<disks_tower2.length;j++)
      disks_tower2[j].display();
      pop();
  for(j=0;j<disks_tower3.length;j++)
    disks_tower3[j].display();
    
    if(isstarted==true && move_state!=Math.pow(2,disk_number)){
      if(move[move_state][1]>move[move_state][0]){
        if(move[move_state][0]==100 && move[move_state][1]==200){
          
                
                
          if(disks_tower1[disks_tower1.length-1].y>=19 && state==1){
            disks_tower1[disks_tower1.length-1].move(0,k);
            
          }else{
            
              if(disks_tower1[disks_tower1.length-1].x<move[move_state][1]+100){
              disks_tower1[disks_tower1.length-1].move(v,0)
            }
              else{
               if(disks_tower2.length>0){
                 
                if(disks_tower1[disks_tower1.length-1].y<disks_tower2[disks_tower2.length-1].y-40){
                  state=3;
                  disks_tower1[disks_tower1.length-1].move(0,v);
                }else{
                  disks_tower2.push(new Disk(disks_tower1[disks_tower1.length-1].x,disks_tower1[disks_tower1.length-1].y,disks_tower1[disks_tower1.length-1].width));
                    disks_tower1.pop();
                    move_state++;
                    state=1;
                }
               }else{
                  if(disks_tower1[disks_tower1.length-1].y<=canvas_height-rect_height+10){
                    state=3;
                    disks_tower1[disks_tower1.length-1].move(0,v);
                  }else{
                    disks_tower2.push(new Disk(disks_tower1[disks_tower1.length-1].x,disks_tower1[disks_tower1.length-1].y,disks_tower1[disks_tower1.length-1].width));
                    disks_tower1.pop();
                    move_state++;
                    state=1;
                    
                  }
                     }
                  }
                }
                  
  
        }else if(move[move_state][0]==100 && move[move_state][1]==300){
             
          if(disks_tower1[disks_tower1.length-1].y>=19 && state==1){
            disks_tower1[disks_tower1.length-1].move(0,k);
            
          }else{
            
              if(disks_tower1[disks_tower1.length-1].x<move[move_state][1]+200){
              disks_tower1[disks_tower1.length-1].move(v,0)
            }
              else{
               if(disks_tower3.length>0){
                 
                if(disks_tower1[disks_tower1.length-1].y<disks_tower3[disks_tower3.length-1].y-40){
                  disks_tower1[disks_tower1.length-1].move(0,v);
                 
                  state=3;
                }else{
                  disks_tower3.push(new Disk(disks_tower1[disks_tower1.length-1].x,disks_tower1[disks_tower1.length-1].y,disks_tower1[disks_tower1.length-1].width));
                  disks_tower1.pop();
                  move_state++;
                  state=1;
                }
               }else{
                  if(disks_tower1[disks_tower1.length-1].y<=canvas_height-rect_height+10){
                    state=3;
                    disks_tower1[disks_tower1.length-1].move(0,v);
                  }else{
                    disks_tower3.push(new Disk(disks_tower1[disks_tower1.length-1].x,disks_tower1[disks_tower1.length-1].y,disks_tower1[disks_tower1.length-1].width));
                    disks_tower1.pop();
                    move_state++;
                    state=1;
                    
                  }
                     }
                  }
                }
        }else if(move[move_state][0]==200 && move[move_state][1]==300){
            
          if(disks_tower2[disks_tower2.length-1].y>=19 && state==1){
            disks_tower2[disks_tower2.length-1].move(0,k);
            
          }else{
            
              if(disks_tower2[disks_tower2.length-1].x<move[move_state][1]+200){
              disks_tower2[disks_tower2.length-1].move(v,0)
            }
              else{
               if(disks_tower3.length>0){
                 
                if(disks_tower2[disks_tower2.length-1].y<disks_tower3[disks_tower3.length-1].y-40){
                  state=3;
                  disks_tower2[disks_tower2.length-1].move(0,v);
                }else{
                  disks_tower3.push(new Disk(disks_tower2[disks_tower2.length-1].x,disks_tower2[disks_tower2.length-1].y,disks_tower2[disks_tower2.length-1].width));
                  disks_tower2.pop();
                  move_state++;
                  state=1;
                }
               }else{
                  if(disks_tower2[disks_tower2.length-1].y<=canvas_height-rect_height+10){
                    state=3;
                    disks_tower2[disks_tower2.length-1].move(0,v);
                  }else{
                    disks_tower3.push(new Disk(disks_tower2[disks_tower2.length-1].x,disks_tower2[disks_tower2.length-1].y,disks_tower2[disks_tower2.length-1].width));
                    disks_tower2.pop();
                    move_state++;
                    state=1;
                    
                  }
                     }
                  }
                }
        }
    }else{if(move[move_state][0]==300 && move[move_state][1]==100){
  
      if(disks_tower3[disks_tower3.length-1].y>=19 && state==1){
        disks_tower3[disks_tower3.length-1].move(0,k);
        
      }else{
        
          if(disks_tower3[disks_tower3.length-1].x>move[move_state][1]+8){
          disks_tower3[disks_tower3.length-1].move(-v,0)
        }
          else{
           if(disks_tower1.length>0){
             
            if(disks_tower3[disks_tower3.length-1].y<disks_tower1[disks_tower1.length-1].y-40){
              state=3;
              disks_tower3[disks_tower3.length-1].move(0,v);
            }else{
              disks_tower1.push(new Disk(disks_tower3[disks_tower3.length-1].x,disks_tower3[disks_tower3.length-1].y,disks_tower3[disks_tower3.length-1].width));
              disks_tower3.pop();
              move_state++;
              state=1;
            }
           }else{
              if(disks_tower3[disks_tower3.length-1].y<=canvas_height-rect_height+10){
                state=3;
                disks_tower3[disks_tower3.length-1].move(0,v);
              }else{
                disks_tower1.push(new Disk(disks_tower3[disks_tower3.length-1].x,disks_tower3[disks_tower3.length-1].y,disks_tower3[disks_tower3.length-1].width));
                disks_tower3.pop();
                move_state++;
                state=1;
                
              }
                 }
              }
            }
    }else{
      if(move[move_state][0]==300 && move[move_state][1]==200){
        if(disks_tower3[disks_tower3.length-1].y>=19 && state==1){
          disks_tower3[disks_tower3.length-1].move(0,k);
          
        }else{
          
            if(disks_tower3[disks_tower3.length-1].x>move[move_state][1]+100){
            disks_tower3[disks_tower3.length-1].move(-v,0)
          }
            else{
             if(disks_tower2.length>0){
               
              if(disks_tower3[disks_tower3.length-1].y<disks_tower2[disks_tower2.length-1].y-40){
                state=3;
                disks_tower3[disks_tower3.length-1].move(0,v);
              }else{
                disks_tower2.push(new Disk(disks_tower3[disks_tower3.length-1].x,disks_tower3[disks_tower3.length-1].y,disks_tower3[disks_tower3.length-1].width));
                disks_tower3.pop();
                move_state++;
                state=1;
              }
             }else{
                if(disks_tower3[disks_tower3.length-1].y<=canvas_height-rect_height){
                  state=3;
                  disks_tower3[disks_tower3.length-1].move(0,v);
                }else{
                  disks_tower2.push(new Disk(disks_tower3[disks_tower3.length-1].x,disks_tower3[disks_tower3.length-1].y,disks_tower3[disks_tower3.length-1].width));
                  disks_tower3.pop();
                  move_state++;
                  state=1;
                  
                }
                   }
                }
              }
      }else if(move[move_state][0]==200 && move[move_state][1]==100){
        if(disks_tower2[disks_tower2.length-1].y>=19 && state==1){
          disks_tower2[disks_tower2.length-1].move(0,k);
          
        }else{
          
            if(disks_tower2[disks_tower2.length-1].x>move[move_state][1]+8){
            disks_tower2[disks_tower2.length-1].move(-v,0)
          }
            else{
             if(disks_tower1.length>0){
               
              if(disks_tower2[disks_tower2.length-1].y<disks_tower1[disks_tower1.length-1].y-40){
                state=3;
                disks_tower2[disks_tower2.length-1].move(0,v);
              }else{
                disks_tower1.push(new Disk(disks_tower2[disks_tower2.length-1].x,disks_tower2[disks_tower2.length-1].y,disks_tower2[disks_tower2.length-1].width));
                disks_tower2.pop();
                move_state++;
                state=1;
              }
             }else{
                if(disks_tower2[disks_tower2.length-1].y<=canvas_height-rect_height+10){
                  state=3;
                  disks_tower2[disks_tower2.length-1].move(0,v);
                }else{
                  disks_tower1.push(new Disk(disks_tower2[disks_tower2.length-1].x,disks_tower2[disks_tower2.length-1].y,disks_tower2[disks_tower2.length-1].width));
                  disks_tower2.pop();
                  move_state++;
                  state=1;
                  
                }
                   }
                }
              }
  
      }
    }
  
    }
    }
     
   
}


let hanoi_move=1;


var y_axis=[50,100,150,200,250,300]
random_color_tower1=Math.random(255);
random_color_tower2=Math.random(255);
let rect_height=40;
let canvas_height=500;
let rect_upper_width=130;
let rect_for_tower_1_X_asis=100;
let rect_for_tower_2_X_asis=300;
let rect_for_tower_3_x_asis=250;
let rect_for_tower_1_Y=canvas_height-rect_height*disk_number;
let rect_for_tower_2_Y=canvas_height;
let rect_for_tower_3_Y=canvas_height;

class Hanoi{
  constructor(){ 
  }
  static setNumber(number){
    disk_number=number; 
    console.log(disk_number)
  }
  static changespeed(number){
    k*=number;
    v*=number;
  }
  static start(){
    for( var i=1;i<=disk_number;i++){
      fill(random(255),random(255),random(255))
      disks_tower1.push(new Disk(rect_for_tower_1_X_asis,(canvas_height-rect_height*i)+20,(rect_upper_width-i*10)));}
      this.begin(disk_number,100,300,200);
      isstarted=true;
   }
  
   
  static exctended_hanoi(){
 
    for( var i=1;i<=disk_number;i++){
      
      fill(random(255),random(255),random(255))
      
      disks_tower1.push(new Disk(rect_for_tower_1_X_asis,(canvas_height-rect_height*i)+20,(20+rect_upper_width-i*10)));   
  }
  
  for( var i=1;i<=disk_number;i++){
  
    disks_tower2.push(new Disk(rect_for_tower_2_X_asis,(canvas_height-rect_height*i)+20,(rect_upper_width-i*10)));
   
}
this.begin_exctended_hanoi(disk_number,100,300,200);
isstarted=true;
}
static begin_exctended_hanoi(disk_number,main,target,help){
  if(disk_number==1){
    move[hanoi_move]=[main,help];
    hanoi_move++;
    move[hanoi_move]=[target,help];
  
  }
  else{
    this.begin_exctended_hanoi(disk_number-1,main,target,help);
    move[hanoi_move]=[target,main];
    hanoi_move++;
    this.begin(2*disk_number-2,help,target,main);
    this.begin(2*disk_number,main,target,help);
  }

}
  
  static begin(disk_number,main,target,help){
    if (disk_number == 1) 
    { 
        console.log("Move disk 1 from rod " +  main + " to rod " + target); 
        move[hanoi_move]=[main,target];
        hanoi_move++;
        return; 
    } 
    this.begin(disk_number-1, main, help, target); 
    console.log("Move disk " + disk_number + " from rod " +  main+ " to rod " + target); 
    move[hanoi_move]=[main,target];
    hanoi_move++;
    this.begin(disk_number-1, help, target, main); 
} 
  
static pause(){
  isstarted=false;
}
static resume(){
  isstarted=true;
}
  static reset(){
      disks_tower1.splice(0,disks_tower1.length);
      disks_tower2.splice(0,disks_tower2.length);
      disks_tower3.splice(0,disks_tower3.length);
      move.slice(0,move.length);
      isstarted=false;
      move_state=1;
      state=1;
  }
}
function Disk(x,y,width){
    this.x=x;
    this.y=y;
    this.width=width;
  
  this.display = function(){
    rect(this.x,this.y,width,40);
    fill(color,color,color)
    
  }

 this.move=function (moveX,moveY){
this.x+=moveX;
this.y+=moveY; 
  }
  this.getX=function(){
    return this.x;
  }
 }
