function checkForm(frm){
	var destCount = frm.elements['option[]'].length;
	var destSel   = false;
	for(i = 0; i < destCount; i++){
		if(frm.elements['option[]'][i].checked){
			destSel = true;
			break;
		}
	}

	if(!destSel){
		alert('Hey! Select one!');
	}
	return destSel;
}