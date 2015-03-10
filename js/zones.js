var Zone = (function() {

		var Zone = function(zoneNum, bgColor) {
			this.domId = 'Zone_' + zoneNum + '_Area';
			this.triggerId = 'zone' + zoneNum + 'but';
			this.bgColor = bgColor;
			this.defColor = '#ffffff';
			this.status = 'inactive';


		};

		Zone.prototype = {

			getStatus: function() {
				return this.status;
			},

			toggleStatus: function() {
				if (this.status === 'active') {
					this.status = 'inactive';
				}
				else {
					this.status = 'active';
				}
			},

			init: function() {

				var that = this;
				var trigger = document.getElementById(that.triggerId);


				trigger.addEventListener('click', function(e) {

					this.classList.toggle('activated');

					e.preventDefault();
					/*********Toggle from initial status ********/
					that.toggleStatus();
		
					var zoneGrp = document.getElementById(that.domId),
						bgColor = that.bgColor,
						zoneAreas = zoneGrp.children;


					if (that.status === 'active') {

						/*********If active, change colors of zone area ********/
						for (var i=0; i<zoneAreas.length; i++) {
							zoneAreas[i].style.fill = bgColor;

						}
					}

					else {

						for (var i=0; i<zoneAreas.length; i++) {
							zoneAreas[i].style.fill = 'none';
						}
					}

				}, false);

				
			}

		};


		return Zone;

}());



var PickPath = (function() {


	var pickpath = function(pathNum) {

		//static properties//
		this.buttonId = 'pickPath' + pathNum;
		this.pathAreaId = ('Pick_Path_') + pathNum;
		this.status = 'inactive';

		//helperMethods//

		this.toggleStatus = function() {
			
			if (this.status === 'inactive') {
				this.status = 'active';
			}
			else {
				this.status = 'inactive';
			}
		};
		
	};



	pickpath.prototype = {

		getButton :function() {
			var button = document.getElementById(this['buttonId']);
			return button;
		},

		getPaths : function() {
			var pathLayer = document.getElementById(this['pathAreaId']),
				paths = pathLayer.querySelectorAll('polygon');
				return paths;
		},

		init: function() {

			var trigger = this.getButton(),
				that = this;

				trigger.addEventListener('click', function() {

					var pickPaths = that.getPaths();

					that.toggleStatus();

					if (that.status === 'inactive') {

						for (var i =0; i<pickPaths.length; i++) {
							pickPaths[i].style.fill = 'none';
						}
					}

					else {

						for (var i =0; i<pickPaths.length; i++) {
							pickPaths[i].style.fill = 'red';
						}					
					} 
					
				}, false);
		}
	
	};

	return pickpath;

}());