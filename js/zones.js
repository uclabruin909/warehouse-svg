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

			getColor: function() {
				return this.bgColor;
			},

			init: function() {

				var that = this,
					trigger = document.getElementById(this.triggerId);
					zoneGrp = document.getElementById(this.domId),
					bgColor = this.getColor(),
					zoneAreas = zoneGrp.children;



				trigger.addEventListener('click', function(e) {

					e.preventDefault();
					/*********Toggle from initial status ********/
					that.toggleStatus();

					if (that.status === 'active') {

						/*********If active, change colors of zone area ********/
						for (var i=0; i<zoneAreas.length; i++) {
							zoneAreas[i].style.fill = bgColor;

						}
					}

					else {

						for (var i=0; i<zoneAreas.length; i++) {
							zoneAreas[i].style.fill = '#ffffff';
						}
					}

				}, false);

				
			}

		};


		return Zone;

}());