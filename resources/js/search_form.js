$(function() {

var formTemplate = "

		<form>

			<div class='search-ht-form clearfix'>

				<div class='row-form '>
					<div class='date-text'>Дата заезда:</div>
					<div class='date-inpt'>
						<input type='text' id='datepicker_to'/>
						<i class='icon-calendar'></i>
					</div>
				</div>

				<div class='row-form '>
					<div class='date-text'>Дата выезда:</div>
					<div class='date-inpt'>
						<input type='text' id='datepicker_of'/>
						<i class='icon-calendar' id='datepicker_of'></i>
					</div>
				</div>


				<div class='row-form clearfix'>

					<div class='adults-count'>

						<div class='adult-h'>Взрослые:</div>

						<div class='adult-inpt' >
							<div class='icon-count'><i class='icon-minus'></i></div>
							<input class='count-inpt' type='text' />
							<div class='icon-count'><i class='icon-plus'></i></div>
						</div>

					</div>

					<div class='child-count'>
						<div class='child-h'>Дети:</div>

						<div class='child-inpt' >	
							<div style='' class='icon-count'><i class='icon-minus'></i></div>
							<input class='count-inpt' type='text' />
							<div class='icon-count'><i class='icon-plus'></i></div>
						</div>

					</div>
				</div>

				<input type='button' class='found-ht-btn' value='Найти' />

			</div>

		</form>

";

});