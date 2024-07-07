/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Load the Visualization API and the columnchart package.
// @ts-ignore TODO update to newest visualization library
google.load("visualization", "1", { packages: ["columnchart"] });

function initMap(): void {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  const path = [
    { lat: 52.1562479, lng: 0.1741343 },
    { lat: 52.1570197, lng: 0.1731472 },
    { lat: 52.1576384, lng: 0.1736595 },
    { lat: 52.1577437, lng: 0.1734838 },
    { lat: 52.1580646, lng: 0.1737427 },
    { lat: 52.1580786, lng: 0.1738499 },
    { lat: 52.1581053, lng: 0.1739867 },
    { lat: 52.158188, lng: 0.1742067 },
    { lat: 52.1582653, lng: 0.1744454 },
    { lat: 52.1582802, lng: 0.1747324 },
    { lat: 52.1582851, lng: 0.1748155 },
    { lat: 52.1586125, lng: 0.1752769 },
    { lat: 52.1578819, lng: 0.1765643 },
    { lat: 52.1576549, lng: 0.1769962 },
    { lat: 52.157441, lng: 0.1774441 },
    { lat: 52.1568996, lng: 0.1787933 },
    { lat: 52.1565392, lng: 0.1799037 },
    { lat: 52.1560636, lng: 0.1813306 },
    { lat: 52.1555864, lng: 0.1825323 },
    { lat: 52.1552491, lng: 0.183172 },
    { lat: 52.1546912, lng: 0.1841825 },
    { lat: 52.1540255, lng: 0.185239 },
    { lat: 52.1535611, lng: 0.1859093 },
    { lat: 52.1526172, lng: 0.1872927 },
    { lat: 52.1520814, lng: 0.1880698 },
    { lat: 52.1515991, lng: 0.1887852 },
    { lat: 52.1514275, lng: 0.1889252 },
    { lat: 52.1512117, lng: 0.1886921 },
    { lat: 52.1508247, lng: 0.1882605 },
    { lat: 52.149608, lng: 0.18707 },
    { lat: 52.1483452, lng: 0.1860406 },
    { lat: 52.1483452, lng: 0.1860406 },
    { lat: 52.1483796, lng: 0.1858943 },
    { lat: 52.1485278, lng: 0.1855295 },
    { lat: 52.1487812, lng: 0.1849663 },
    { lat: 52.1493079, lng: 0.1837915 },
    { lat: 52.1504534, lng: 0.1811522 },
    { lat: 52.1509175, lng: 0.1800739 },
    { lat: 52.1510426, lng: 0.1798003 },
    { lat: 52.1511216, lng: 0.1797145 },
    { lat: 52.151217, lng: 0.1795858 },
    { lat: 52.1512664, lng: 0.1794624 },
    { lat: 52.1512763, lng: 0.1793604 },
    { lat: 52.1512861, lng: 0.1792746 },
    { lat: 52.151431, lng: 0.179001 },
    { lat: 52.1519708, lng: 0.1777618 },
    { lat: 52.1522801, lng: 0.177043 },
    { lat: 52.1526718, lng: 0.1761579 },
    { lat: 52.1532116, lng: 0.1749133 },
    { lat: 52.1534288, lng: 0.1744145 },
    { lat: 52.1534683, lng: 0.1742964 },
    { lat: 52.1535045, lng: 0.1742482 },
    { lat: 52.1535572, lng: 0.1742052 },
    { lat: 52.1535951, lng: 0.1743259 },
    { lat: 52.1536609, lng: 0.1744721 },
    { lat: 52.1536659, lng: 0.1745003 },
    { lat: 52.1536247, lng: 0.1747229 },
    { lat: 52.153554, lng: 0.1750863 },
    { lat: 52.1534774, lng: 0.1754444 },
    { lat: 52.1534577, lng: 0.1755772 },
    { lat: 52.1534519, lng: 0.1756228 },
    { lat: 52.1534848, lng: 0.1757475 },
    { lat: 52.1536206, lng: 0.1762142 },
    { lat: 52.1536642, lng: 0.1763483 },
    { lat: 52.1537498, lng: 0.1765723 },
    { lat: 52.1538419, lng: 0.1768083 },
    { lat: 52.153874, lng: 0.1768687 },
    { lat: 52.1539933, lng: 0.1770001 },
    { lat: 52.1542657, lng: 0.1772616 },
    { lat: 52.1543825, lng: 0.1773421 },
    { lat: 52.1545562, lng: 0.1774641 },
    { lat: 52.1546549, lng: 0.1775339 },
    { lat: 52.1547059, lng: 0.1775365 },
    { lat: 52.1547298, lng: 0.1775298 },
    { lat: 52.1548598, lng: 0.1774856 },
    { lat: 52.1550087, lng: 0.1774373 },
    { lat: 52.1550441, lng: 0.1774225 },
    { lat: 52.1550778, lng: 0.1774051 },
    { lat: 52.1551066, lng: 0.1773783 },
    { lat: 52.1551403, lng: 0.1773421 },
    { lat: 52.1552185, lng: 0.1772536 },
    { lat: 52.1553148, lng: 0.177149 },
    { lat: 52.1553905, lng: 0.1770658 },
    { lat: 52.1554497, lng: 0.1769961 },
    { lat: 52.1554917, lng: 0.17698 },
    { lat: 52.1558636, lng: 0.1773608 },
    { lat: 52.1565235, lng: 0.1780341 },
    { lat: 52.1566716, lng: 0.1782111 },
    { lat: 52.1567357, lng: 0.1782299 },
    { lat: 52.1568756, lng: 0.178195 },
    { lat: 52.1569283, lng: 0.1781467 },
    { lat: 52.1567752, lng: 0.1780073 },
    { lat: 52.1556332, lng: 0.1767895 },
    { lat: 52.1556826, lng: 0.1766286 },
    { lat: 52.155834, lng: 0.1762424 },
    { lat: 52.1558521, lng: 0.176178 },
    { lat: 52.1559689, lng: 0.1758213 },
    { lat: 52.1560495, lng: 0.1755718 },
    { lat: 52.1561055, lng: 0.1753465 },
    { lat: 52.1561351, lng: 0.1751829 },
    { lat: 52.1562207, lng: 0.1747591 },
    { lat: 52.156247, lng: 0.1745472 },
    { lat: 52.1562684, lng: 0.1743541 },
    { lat: 52.1562733, lng: 0.1742763 },
    { lat: 52.1562479, lng: 0.1741343 },
  ]; // Badwater, Death Valley

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 14,
      center: path[1],
      mapTypeId: "hybrid",
    }
  );

  // Create an ElevationService.
  const elevator = new google.maps.ElevationService();

  // Draw the path, using the Visualization API and the Elevation service.
  displayPathElevation(path, elevator, map);
}

function displayPathElevation(
  path: google.maps.LatLngLiteral[],
  elevator: google.maps.ElevationService,
  map: google.maps.Map
) {
  // Display a polyline of the elevation path.
  new google.maps.Polyline({
    path: path,
    strokeColor: "#CC0077",
    strokeOpacity: 0.9,
    map: map,
  });

  // Create a PathElevationRequest object using this array.
  // Ask for 256 samples along that path.
  // Initiate the path request.
  elevator
    .getElevationAlongPath({
      path: path,
      samples: 256,
    })
    .then(plotElevation)
    .catch((e) => {
      const chartDiv = document.getElementById(
        "elevation_chart"
      ) as HTMLElement;

      // Show the error code inside the chartDiv.
      chartDiv.innerHTML = "Cannot show elevation: request failed because " + e;
    });
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation({ results }: google.maps.PathElevationResponse) {
  const chartDiv = document.getElementById("elevation_chart") as HTMLElement;

  // Create a new chart in the elevation_chart DIV.
  const chart = new google.visualization.ColumnChart(chartDiv);

  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  const data = new google.visualization.DataTable();

  data.addColumn("string", "Sample");
  data.addColumn("number", "Elevation");

  for (let i = 0; i < results.length; i++) {
    data.addRow(["", results[i].elevation]);
  }

  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 350,
    legend: "none",
    // @ts-ignore TODO update to newest visualization library
    titleY: "Altitude (m)",
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
