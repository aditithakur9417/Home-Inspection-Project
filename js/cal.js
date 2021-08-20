var radioValue ;
var base_price;
var add_val=0;
var discount=50;
var add_on_val=0;
var type_selection ;
var totVal=0;
var addMore=0;
$('.cp').hide() ;
$('.sewer').hide() ;
;calculated_value();
function calculated_value(){
  addMore=0;
  radioValue = $("input[name='style_home']:checked").val();
 
  if(clickedId=="standard" && radioValue=="single"){
    if(sldVal<1301){
      base_price=395 ;
      
    }
    else  if(sldVal>1300 && sldVal<1801 ){
      base_price=435 ;
      
    }
    else  if(sldVal>1800 && sldVal<2501 ){
      base_price=485 ;
    }
    else  if(sldVal>2500 && sldVal<3501 ){
      base_price=545 ;
    }
    else  if(sldVal>3500 && sldVal<4501 ){
      base_price=620 ;
    }
    else{
      base_price=725 ; 
    }

    
    
  }


  else if (clickedId=="standard" && radioValue=="condo"){
    if(sldVal<1301){
      base_price=380 ;
    }
    else  if(sldVal>1300 && sldVal<1801 ){
      base_price=420 ;
    }
    else  if(sldVal>1800 && sldVal<2501 ){
      base_price=470 ;
    }
    else  if(sldVal>2500 && sldVal<3501 ){
      base_price=530 ;
    }
    else  if(sldVal>3500 && sldVal<4501 ){
      base_price=605 ;
    }
    else{
      base_price=710 ; 
    }
    

  } 
  else if (clickedId=="standard" && radioValue=="multiplex") {
    if(sldVal<1301){
      base_price=410 ;
    }
    else  if(sldVal>1300 && sldVal<1801 ){
      base_price=455 ;
    }
    else  if(sldVal>1800 && sldVal<2501 ){
      base_price=540 ;
    }
    else  if(sldVal>2500 && sldVal<3501 ){
      base_price=625 ;
    }
    else  if(sldVal>3500 && sldVal<4501 ){
      base_price=685 ;
    }
    else{
      base_price=790 ; 
    }

  }  
//   home mainainence starts
 
else if(clickedId=="home" && radioValue=="single"){
  if(sldVal<1301){
    base_price=275 ;
    
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
    
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

  
  
}


else if (clickedId=="home" && radioValue=="condo"){
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }
  

} 
else if (clickedId=="home" && radioValue=="multiplex") {
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

} 
// pre starts
else if(clickedId=="pre" && radioValue=="single"){
  if(sldVal<1301){
    base_price=275 ;
    
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
    
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

  
  
}


else if (clickedId=="pre" && radioValue=="condo"){
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }
  

} 
else if (clickedId=="pre" && radioValue=="multiplex") {
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

} 

// month warranty starts
else if(clickedId=="month" && radioValue=="single"){
  if(sldVal<1301){
    base_price=275 ;
    
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
    
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

  
  
}


else if (clickedId=="month" && radioValue=="condo"){
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }
  

} 
else if (clickedId=="month" && radioValue=="multiplex") {
  if(sldVal<1301){
    base_price=275 ;
  }
  else  if(sldVal>1300 && sldVal<1801 ){
    base_price=300 ;
  }
  else  if(sldVal>1800 && sldVal<2501 ){
    base_price=325 ;
  }
  else  if(sldVal>2500 && sldVal<3501 ){
    base_price=360 ;
  }
  else  if(sldVal>3500 && sldVal<4501 ){
    base_price=425 ;
  }
  else{
    base_price=480 ; 
  }

} 
if ((clickedId=="standard" || clickedId=="home" ) && ageVal<1926){

add_val=60;
}
else if ((clickedId=="standard" || clickedId=="home" ) && ageVal>1925 && ageVal<1961){
  add_val=50;
}
else {
  add_val=0;
}
if($('#defaultCheck1').is(":checked")){
addMore += 45;
$('.cp').show() ;
}
else
{
  addMore += 0;
$('.cp').hide() ;
}
if($('#defaultCheck2').is(":checked")){
  addMore += 225;
  $('.sewer').show() ;
  }
  else
  {
    addMore += 0;
    $('.sewer').hide() ;
  }
  
if($( "#sclt1" ).val()=="a"){
  totVal=base_price+add_val ;

}
else
{
  totVal=base_price+add_val-discount;
}

$('#pkj1').text(" ($ "+ (totVal+addMore) +")") ;
$('#pkj2').text(" ($ "+( totVal+addMore+80)+")") ;
}

function setcheck(){
  
  if($('#defaultCheck3').is(":checked") && !$('#defaultCheck4').is(":checked")  ){
    $("#defaultCheck4").prop("checked", true) ;
  }
  if($('#defaultCheck4').is(":checked")){
    $("#defaultCheck3").prop("checked", false)
  }
  }

    function create_pdf(){
      calculated_value();
      if (clickedId=="standard")
      {        type_selection="Standard Residential Inspection";

      }
      else if (clickedId=="home")
      {        type_selection="Home Maintainance Inspection";

      }
      else if (clickedId=="pre")
      {        type_selection="Pre delivery Inspection";

      }
      else 
      {        type_selection="Month Warranty Inspection";

      }
      
      if(radioValue=="single"){
        radtxt="Single Family Home" ;
      }
      else  if(radioValue=="condo"){
        radtxt="Condo/Townhouse" ;
      }
      else {
        radtxt="Multiplex ( 4 units max )" ;
      }
      var pdf = new jsPDF();
        pdf.setFontSize(22);
        txt="Home Inspection Price Quote";
        pdf.text(50, 30, txt);
        pdf.setFontSize(18);
        txt="Profession ";
        pdf.text(30, 40, txt);
        pdf.text(100, 40, $( "#sclt1 option:selected" ).text());
        
        
       


        txt="Size Of Home";
        pdf.text(30, 50, txt);
        pdf.text(100, 50, sldVal.toString());
        
        txt="Type Of Inspection";
        pdf.text(30, 60, txt);
        
        pdf.text(100, 60,type_selection );
        
        
        txt="House Style";
        pdf.text(30, 70, txt);
        pdf.text(100, 70, radtxt);

        txt="Age of Home";
        pdf.text(30, 80, txt);
        pdf.text(100, 80, ageVal.toString());
        txt="Total";
        pdf.text(30, 90, txt);
        pdf.text(100, 90, "$ "+(totVal+addMore).toString());

        txt="Great Package";
        pdf.text(30, 100, txt);
        pdf.text(100, 100, "$ "+(totVal+addMore).toString());

        txt="Awesome Package";
        pdf.text(30, 110, txt);
        pdf.text(100, 110, "$ "+(totVal+addMore+80).toString());

        pdf.save('quote.pdf');
    }
   