      require(["esri/Map", "esri/layers/CSVLayer", "esri/views/MapView", "esri/widgets/Legend"], (
        Map,
        CSVLayer,
        MapView,
        Legend
      ) => {
        var url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

        // Paste the url into a browser's address bar to download and view the attributes
        // in the CSV file. These attributes include:
        // * mag - magnitude
        // * type - earthquake or other event such as nuclear test
        // * place - location of the event
        // * time - the time of the event

        const template = {
					title: "Crime Comitted at {ILEADStreet}"
				};

				const csvLayer = new CSVLayer({
					url: url,
					title: "St. Louis Crime Heatmap",
					copyright: "St. Loius Police Department",
					popupTemplate: template
				});

        csvLayer.renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#CBEFFD", ratio: 0.083 },
            { color: "#97dffc", ratio: 0.166 },
            { color: "#93caf6", ratio: 0.249 },
            { color: "#8eb5f0", ratio: 0.332 },
            { color: "#858ae3", ratio: 0.415 },
            { color: "#7364d2", ratio: 0.498 },
            { color: "#613dc1", ratio: 0.581 },
            { color: "#5829a7", ratio: 0.664 },
            { color: "#4e148c", ratio: 0.747 },
            { color: "#461177", ratio: 0.83 },
            { color: "#3d0e61", ratio: 0.913 },
            { color: "#1F0731", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

        const map = new Map({
          basemap: "gray-vector",
          layers: [csvLayer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.18373371599399, 38.63049167971384],
          zoom: 12,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-right"
        );
      });
