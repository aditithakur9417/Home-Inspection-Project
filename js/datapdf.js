  
  function awards_data1(){
    var m=0;
    awards_text="";
    awards_array=["Soldier’s Medal or higher award/decoration","Bronze Star Medal with “V” Device","Bronze Star Medal","Purple Heart","Defense Meritorious Service Medal","Meritorious Service Medal","Air Medal with “V” Device","Army Commendation Medal with “V” Device","Air Medal","Joint Service Commendation Medal","Army Commendation Medal","Joint Service Achievement Medal","Army Achievement Medal","Good Conduct Medal","Army Reserve Components Achievement Medal","Armed Forces Reserve Medal (with or without “M” Device)","Military Outstanding Volunteer Service Medal"];
       
      for(let i=1;i<18;i++){
      if(parseInt($('#awnum_'+i).autoNumeric('get')) != 0){
        if(m==0)
        {
          awards_text += ""
          m=m+1;
        }
        awards_text += "<br><div >  "+awards_array[i-1]+": " +parseInt($('#awnum_'+i).autoNumeric('get'))+"  </div>" ;
      }
        
      }
      
        //awards_text += "<div style='font-weight:bold'>Awards</div><br>"
            //awards_text += "<div >"+awards_array[i-1]+"</div><br>" ;
      
      $('#awards_text1').html(awards_text);
    }
  function badges_data1(){
    var n=0;
    badges_text="";
    badges_array_text=["Combat Infantryman Badge","Combat Medical Badge","Combat Action Badge","Expert Infantryman Badge","Expert Field Medical Badge","Expert Soldier Badge","Master Parachute Badge","Master Explosive Ordnance Disposal Badge","Master Recruiter Badge","Gold Recruiter Badge","Divers Badge (First Class)","Aviation Badge (Master)","Master Army Instructor Badge","Basic Army Instructor Badge","Senior Army Instructor Badge","Senior Parachute Badge","Senior Explosive Ordnance Disposal Badge","Presidential Service Badge","Vice President Service Badge","Drill Sergeant Badge","Basic U.S. Army Recruiter Badge","Divers Badge (Salvage)","Parachute Combat Badge with bronze service star (Senior)","Aviation Badge(Senior)","Military Free Fall Parachutist Badge (Master)","Special Operations Diver Badge (Supervisor)","Senior Space Badge","Parachute Badge","Parachute Combat Badge with bronze service star (Basic)","Parachute Rigger Badge","Divers badge (Second-Class)","Divers Badge (Scuba)","Basic Explosive Ordnance Disposal Badge","Pathfinder Badge","Air Assault Badge","Aviation Badge (Basic)","Secretary of Defense Service Badge","Joint Chiefs of Staff Identification Badge","Army Staff Identification Badge","Space Badge","Military Free Fall Parachutist Badge (Basic)","Special Operations Diver Badge (Basic)","Tomb Guard Identification Badge","Military Horseman Identification Badge","Driver and Mechanic Badge"]
    for(let j=1;j<46;j++){
      if ($('#ba_'+j).is(':checked')) {
        
        if(n==0)
        {
          
          n=n+1;
        }
        badges_text  += "<br><div >  "+badges_array_text[j-1]+" </div>" ;
      
        
    }
      
  }   
        //awards_text += "<div style='font-weight:bold'>Awards</div><br>"
            //awards_text += "<div >"+awards_array[i-1]+"</div>" ;
      $('#badges_text1').html("  "+badges_text) ;
    }
    function  ao_data1(){
      g=0;
      ao_text="";
        if ($('#ai_1').is(':checked')) {
          if(g==0){
            g=g+1;
            
          }
          ao_text += "<br><div >  Parachutist serving in TOE/TDA position</div>"
           
        }
        if ($('#ai_2').is(':checked')) {
          if(g==0){
            g=g+1;
            ao_text += "<br><div >  Airborne Advantage:</div>"
          }     
          ao_text += "<br><div >  Senior parachutist serving in TOE/TDA position</div>"
           
        }
         if($('#ai_3').is(':checked')){
          if(g==0){
            g=g+1;
            ao_text += "<br><div >  Airborne Advantage:</div>"
          }
          ao_text += "<br><div >  Master parachutist serving in TOE/TDA position</div>"
        }
        $('#ao_text1').html(ao_text) ;
      }   
  function me_data1() { 
        me_text="";
        p=0;
   
        
       if ($('#ma_1').is(':checked')) {
           me_text += "<br><div >  Commandant's List (On DA Form 1059)  </div>"  
                
         }
         if ($('#ma_2').is(':checked')) {
           me_text += "<br><div >  Distinguished Honor/Leadership Graduate (On DA Form 1059)</div>" 
         }
         if ($('#ma_3').is(':checked')) {
           me_text += "<br><div >  Ranger Qualification Course  </div>" 
         }
         if ($('#ma_4').is(':checked')) {
           me_text += "<br><div >  Special Forces Qualification Course  </div>" 
         }
         if ($('#ma_5').is(':checked')) {
           me_text += "<br><div>  Sapper Qualification Course  </div>" 
         }
         $('#me_text1').html(me_text) ;
         
         
    };
    function courses_data1(){
        p=0;
       
   for(let i=1;i<course_num+1;i++)
   {
       co_text="";
       
       if($('#course_name_'+i).val() !="" && parseInt($('#num_weeks_'+i).autoNumeric('get')) !=0  ){
   if(p==0){
      
   p=p+1;
   }
   
   co_text += "<br><div >  "+$('#course_name_'+i).val()+": " +parseInt($('#num_weeks_'+i).autoNumeric('get'))+" Weeks  </div>" 
       }
   $('#co_text1').html(co_text) ;
   }
   
    }
   
   
    function courses_data_a1(){
       co_a_text="";
       p=0;
      
   for(let i=1;i<course_num_second+1;i++)
   {
      
      
      if($('#course_name_a_'+i).val() !="" && parseInt($('#num_hours_'+i).autoNumeric('get')) !=0  ){
   if(p==0){
      
   p=p+1;
   }
   
   co_a_text += "<br><div >  "+$('#course_name_a_'+i).val()+": " +parseInt($('#num_hours_'+i).autoNumeric('get'))+" Hours  </div>" 
      }
   $('#co_a_text1').html(co_a_text) ;
   }
   
   }

   function ce_data1(){
    ce_text="";
    if(parseInt($('#num_semester_hours').autoNumeric('get')) !=0)
    {
        ce_text += "<br><div>  Total Semester Hours Earned: "+ parseInt($('#num_semester_hours').autoNumeric('get')) +"</div>";
    }
    if ($('#ce_1').is(':checked')) {
          
        ce_text += "<br><div>  Completed Degree on Active Duty </div>";
         
      }
      if ($('#ce_2').is(':checked')) {
            
        ce_text += "<br><div>  Completed Degree while on the rank of SGT</div>";
        
      }
      if(parseInt($('#num_credit_hours').autoNumeric('get')) !=0)
    {
        ce_text += "<br><div>  Total Credit Hours Earned: "+ parseInt($('#num_credit_hours').autoNumeric('get')) +"</div>";
    }
    r=0;
    if($('#ca_text_1').val() !="")
    {
        if(r==0)
        {
            r=r+1;
         
        }
        ce_text += "<br><div>"+$('#ca_text_1').val()+"</div>";
    }
    if($('#ca_text_2').val() !="")
    {
        if(r==0)
        {
            r=r+1;
            
        }
        ce_text += "<br><div> "+$('#ca_text_2').val()+"</div>";
    }
    if($('#ca_text_3').val() !="")
    {
        if(r==0)
        {
            r=r+1;
            ce_text += "<br><div>Certificates:</div>";
        }
        ce_text += "<br><div>"+$('#ca_text_3').val()+"</div>";
    }
    if($('#ca_text_4').val() !="")
    {
        if(r==0)
        {
            r=r+1;
            ce_text += "<br><div>Certificates:</div>";
        }
        ce_text += "<br><div>"+$('#ca_text_4').val()+"</div>";
    }
    if($('#ca_text_5').val() !="")
    {
        if(r==0)
        {
            r=r+1;
            ce_text += "<br><div>Certificates:</div>";
        }
        ce_text += "<br><div>"+$('#ca_text_5').val()+"</div>";
    }
    if ($('#tg1').is(':checked')) {
        
        ce_text += "<br><div>Minimum proficiency rating of 1/1 </div>";
         
      }
    
    $('#ce_text1').html(ce_text);
    }