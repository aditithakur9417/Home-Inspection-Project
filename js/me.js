
 function me_data() { 
     me_text="";
     p=0;

     
    if ($('#ma_1').is(':checked')) {
        me_text += "<div >Commandant's List (On DA Form 1059)  </div>"  
             
      }
      if ($('#ma_2').is(':checked')) {
        me_text += "<div >Distinguished Honor/Leadership Graduate (On DA Form 1059)</div>" 
      }
      if ($('#ma_3').is(':checked')) {
        me_text += "<div >Ranger Qualification Course  </div>" 
      }
      if ($('#ma_4').is(':checked')) {
        me_text += "<div >Special Forces Qualification Course  </div>" 
      }
      if ($('#ma_5').is(':checked')) {
        me_text += "Sapper Qualification Course  </div>" 
      }
      $('#me_text').html(me_text) ;
      
      
 };
 function courses_data(){
     p=0;
     co_text="";
for(let i=1;i<course_num+1;i++)
{
    
    
    if($('#course_name_'+i).val() !="" && parseInt($('#num_weeks_'+i).autoNumeric('get')) !=0  ){
if(p==0){
    
p=p+1;
}

co_text += "<div >"+$('#course_name_'+i).val()+": <b>" +parseInt($('#num_weeks_'+i).autoNumeric('get'))+" Weeks  </b></div>" 

    }
    
}
  
$('#co_text').html(co_text) ;
 }


 function courses_data_a(){
    co_a_text="";
    p=0;
   
for(let i=1;i<course_num_second+1;i++)
{
   
   
   if($('#course_name_a_'+i).val() !="" && parseInt($('#num_hours_'+i).autoNumeric('get')) !=0  ){
if(p==0){
   
p=p+1;
}

co_a_text += "<div >"+$('#course_name_a_'+i).val()+": <b>" +parseInt($('#num_hours_'+i).autoNumeric('get'))+" Hours  </b> </div>" 
   }
$('#co_a_text').html(co_a_text) ;
}

}
function ce_data(){
ce_text="";
if(parseInt($('#num_semester_hours').autoNumeric('get')) !=0)
{
    ce_text += "<div>Total Semester Hours Earned: <b>"+ parseInt($('#num_semester_hours').autoNumeric('get')) +"</b></div>";
}
if ($('#ce_1').is(':checked')) {
      
    ce_text += "<div>Completed Degree on Active Duty </div>";
     
  }
  if ($('#ce_2').is(':checked')) {
        
    ce_text += "<div>Completed Degree while on the rank of SGT</div>";
    
  }
  if(parseInt($('#num_credit_hours').autoNumeric('get')) !=0)
{
    ce_text += "<div>Total Credit Hours Earned: <b>"+ parseInt($('#num_credit_hours').autoNumeric('get')) +"</b></div>";
}
r=0;
if($('#ca_text_1').val() !="")
{
    if(r==0)
    {
        r=r+1;
        ce_text += "<div>Certificates:</div>";
    }
    ce_text += "<div>"+$('#ca_text_1').val()+"</div>";
}
if($('#ca_text_2').val() !="")
{
    if(r==0)
    {
        r=r+1;
        ce_text += "<div>Certificates:</div>";
    }
    ce_text += "<div>"+$('#ca_text_2').val()+"</div>";
}
if($('#ca_text_3').val() !="")
{
    if(r==0)
    {
        r=r+1;
        ce_text += "<div>Certificates:</div>";
    }
    ce_text += "<div>"+$('#ca_text_3').val()+"</div>";
}
if($('#ca_text_4').val() !="")
{
    if(r==0)
    {
        r=r+1;
        ce_text += "<div>Certificates:</div>";
    }
    ce_text += "<div>"+$('#ca_text_4').val()+"</div>";
}
if($('#ca_text_5').val() !="")
{
    if(r==0)
    {
        r=r+1;
        ce_text += "<div>Certificates:</div>";
    }
    ce_text += "<div>"+$('#ca_text_5').val()+"</div>";
}
if ($('#tg1').is(':checked')) {
    
    ce_text += "<div>Minimum proficiency rating of 1/1 </div>";
     
  }

$('#ce_text').html(ce_text);
}