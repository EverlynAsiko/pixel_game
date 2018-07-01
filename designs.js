//Selects the color picker dom element
let color =  $('#colorPicker');

// Choose grid size form event that creates the grid
$('#sizePicker').submit(function(e){
    //Removes the previous grid so that other grid selections are not appended to it
    $('tr').remove();

    //Call the makeGrid() function
    makeGrid();
    e.preventDefault();
});
	
//Gets value of color selected
color.change(function(){
	let gridColor = color.val();

    //changes the color of selected cell
    $('td').click(function(){
        $(this).css("background-color", gridColor);
    });
});

//makeGrid function
function makeGrid(){
    //Height and width variables from the form
    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();

    //Selects the table dom element
    const tableSize = $('#pixelCanvas');

	//Loops through adding rows to the table
    for (let x = 1; x <= height; x++){
        tableSize.append('<tr></tr>');
		//Loops through adding columns to the rows
		for (let y = 1; y<=width; y++){
			$('tr:last').append('<td></td>');
		}
    }
};