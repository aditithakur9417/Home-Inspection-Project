function weapons_data(){
  if(weapons_json[1]){
    weapons_json.splice(1,1) ;
  }
   if($('#w_1').autoNumeric('get')=='')
    {
      w_1=0; 
   
    }
    else{

      
      w_1=parseInt($('#w_1').autoNumeric('get'));
      
      weapons_json.push({
       type:"M16A2/M4 Rifle (DA Form 3595 / DA Form 5790)",
       hits:w_1
        
      })
    }
  
    //second
    if($('#w_2').autoNumeric('get')=='')
    {
      w_2=0; 
   
    }
    else{
      w_2=parseInt($('#w_2').autoNumeric('get'));
      weapons_json.push({
       type:"M249 and M240 Machine Guns (DA Form 85)",
       hits:w_2
        
      })
    }
    //third
  
    if($('#w_3').autoNumeric('get')=='')
    {
      w_3=0; 
   
    }
    else{
      w_3=parseInt($('#w_3').autoNumeric('get'));
      weapons_json.push({
       type:"Combat Pistol Qualification (DA Form 88)",
       hits:w_3
        
      })
    }
  
    //fourth
    if($('#w_4').autoNumeric('get')=='')
    {
      w_4=0; 
   
    }
    else{
      w_4=parseInt($('#w_4').autoNumeric('get'));
      weapons_json.push({
       type:"Alternate Pistol Qualification (DA Form 5704)",
       hits:w_4
        
      })
    }
  
    //fifth
    if($('#w_5').autoNumeric('get')=='')
    {
      w_5=0; 
   
    }
    else{
      w_5=parseInt($('#w_1').autoNumeric('get'));
      weapons_json.push({
       type:"M249 AR Qualification (DA Form 7304)",
       hits:w_5
        
      })
    }
  
    //sixth
    if($('#w_6').autoNumeric('get')=='')
    {
      w_6=0; 
   
    }
    else{
      w_6=parseInt($('#w_6').autoNumeric('get'));
      weapons_json.push({
       type:"Practical Pistol",
       hits:w_6
        
      })
    }
  //seventh
    if($('#w_7').autoNumeric('get')=='')
    {
      w_7=0; 
   
    }
    else{
      w_7=parseInt($('#w_7').autoNumeric('get'));
      weapons_json.push({
       type:"Military Police Firearm Qualification",
       hits:w_7
        
      })
    }
    
    if(weapons_json[1]){
       
      $('#weapons_txt').html(weapons_json[1]['type'] + " Hits: "+"<b>" +parseInt(weapons_json[1]['hits'])+"</b>" );
      $('#weapons_txt1').html("  "+weapons_json[1]['type'] + " Hits: "+ parseInt(weapons_json[1]['hits']));
    }
    else{
      $('#weapons_txt').html("" );
      $('#weapons_txt1').html("");
    }
    
  }
  
  function awards_data(){
  var m=0;
  awards_text="";
  awards_array=["Soldier’s Medal or higher award/decoration","Bronze Star Medal with “V” Device","Bronze Star Medal","Purple Heart","Defense Meritorious Service Medal","Meritorious Service Medal","Air Medal with “V” Device","Army Commendation Medal with “V” Device","Air Medal","Joint Service Commendation Medal","Army Commendation Medal","Joint Service Achievement Medal","Army Achievement Medal","Good Conduct Medal","Army Reserve Components Achievement Medal","Armed Forces Reserve Medal (with or without “M” Device)","Military Outstanding Volunteer Service Medal"];
     
    for(let i=1;i<18;i++){
    if(parseInt($('#awnum_'+i).autoNumeric('get')) != 0){
      if(m==0)
      {
        
        m=m+1;
      }
      awards_text += "<div >"+awards_array[i-1]+": " +"<b>"+parseInt($('#awnum_'+i).autoNumeric('get'))+"</b>  </div>" ;
    }
      
    }
    
      //awards_text += "<div style='font-weight:bold'>Awards</div><br>"
          //awards_text += "<div >"+awards_array[i-1]+"</div><br>" ;
    $('#awards_text').html(awards_text);
   
  }
  function badges_data(){
    var n=0;
    badges_text="";
    badges_array_text=["Combat Infantryman Badge","Combat Medical Badge","Combat Action Badge","Expert Infantryman Badge","Expert Field Medical Badge","Expert Soldier Badge","Master Parachute Badge","Master Explosive Ordnance Disposal Badge","Master Recruiter Badge","Gold Recruiter Badge","Divers Badge (First Class)","Aviation Badge (Master)","Master Army Instructor Badge","Basic Army Instructor Badge","Senior Army Instructor Badge","Senior Parachute Badge","Senior Explosive Ordnance Disposal Badge","Presidential Service Badge","Vice President Service Badge","Drill Sergeant Badge","Basic U.S. Army Recruiter Badge","Divers Badge (Salvage)","Parachute Combat Badge with bronze service star (Senior)","Aviation Badge(Senior)","Military Free Fall Parachutist Badge (Master)","Special Operations Diver Badge (Supervisor)","Senior Space Badge","Parachute Badge","Parachute Combat Badge with bronze service star (Basic)","Parachute Rigger Badge","Divers badge (Second-Class)","Divers Badge (Scuba)","Basic Explosive Ordnance Disposal Badge","Pathfinder Badge","Air Assault Badge","Aviation Badge (Basic)","Secretary of Defense Service Badge","Joint Chiefs of Staff Identification Badge","Army Staff Identification Badge","Space Badge","Military Free Fall Parachutist Badge (Basic)","Special Operations Diver Badge (Basic)","Tomb Guard Identification Badge","Military Horseman Identification Badge","Driver and Mechanic Badge"]
    for(let j=1;j<46;j++){
      if ($('#ba_'+j).is(':checked')) {
        
        if(n==0)
        {
         
          n=n+1;
        }
        badges_text  += "<div >"+badges_array_text[j-1]+" </div>" ;
      
        
    }
      
  }   
        //awards_text += "<div style='font-weight:bold'>Awards</div><br>"
            //awards_text += "<div >"+awards_array[i-1]+"</div>" ;
      $('#badges_text').html(badges_text) ;
    }
  function coa_data(){
      certificates_txt = "" ;
      if(certnum>0){
        certificates_txt += "Certificate Of Achievement: <b>"+certnum.toString()+"</b>";
        
        $('#certificates_text').html(certificates_txt) ;
        $('#certificates_text1').html("  "+certificates_txt) ;
      }
    }
  function  ao_data(){
    g=0;
    ao_text="";
      if ($('#ai_1').is(':checked')) {
        if(g==0){
          g=g+1;
          
        }
        ao_text += "<div >Parachutist serving in TOE/TDA position</div>"
         
      }
      if ($('#ai_2').is(':checked')) {
        if(g==0){
          g=g+1;
          
        }     
        ao_text += "<div >Senior parachutist serving in TOE/TDA position</div>"
         
      }
       if($('#ai_3').is(':checked')){
        if(g==0){
          g=g+1;
          
        }
        ao_text += "<div >Master parachutist serving in TOE/TDA position</div>"
      }
      $('#ao_text').html(ao_text) ;
    }