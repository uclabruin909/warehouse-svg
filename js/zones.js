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
							zoneAreas[i].style.fill = '#ffffff';
						}
					}

				}, false);

				
			}

		};


		return Zone;

}());