jQuery(document).ready(function() {
  init();
  function init() {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    myFullDiagram =
      $(go.Diagram, "fullDiagram",  // each diagram refers to its DIV HTML element by id
        {
          initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
          "toolManager.hoverDelay": 100,
          maxScale: 0.25,
          contentAlignment: go.Spot.Center,  // center the tree in the viewport
          isReadOnly: true,  // don't allow user to change the diagram
          "animationManager.isEnabled": false,
          "resizingTool.isGridSnapEnabled": true,
          layout: $(go.TreeLayout,
                    { angle: 90, sorting: go.TreeLayout.SortingAscending }),
          maxSelectionCount: 1,  // only one node may be selected at a time in each diagram
          // when the selection changes, update the myLocalDiagram view
          "ChangedSelection": showLocalOnFullClick
        });

    myLocalDiagram =  // this is very similar to the full Diagram
      $(go.Diagram, "localDiagram",
        {
          autoScale: go.Diagram.UniformToFill,
          contentAlignment: go.Spot.Center,
          isReadOnly: true,
          layout: $(go.TreeLayout,
                    { angle: 90, sorting: go.TreeLayout.SortingAscending }),
          "LayoutCompleted": function(e) {
            var sel = e.diagram.selection.first();
            if (sel !== null) myLocalDiagram.scrollToRect(sel.actualBounds);
          },
          maxSelectionCount: 1,
          "toolManager.hoverDelay": 100,
          // when the selection changes, update the contents of the myLocalDiagram
          "ChangedSelection": showLocalOnLocalClick
        });

    function textStyle() {
      return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
    };

    function shapeStyle(name, fill, stroke) {
      return $(go.Shape, "Rectangle",
        {
          name: name,
          fill: fill,
          stroke: stroke
        });
    };
    // Define a node template that is shared by both diagrams
    var myNodeTemplate =
      $(go.Node, "Auto",
        { locationSpot: go.Spot.Center },
        new go.Binding("text", "key", go.Binding.toString),  // for sorting
        $(go.Shape, "Rectangle",
          new go.Binding("fill", "color"),
          { stroke: null }),
        $(go.Panel, "Horizontal",
          $(go.Picture,
            {
              name: 'Picture',
              desiredSize: new go.Size(39, 50),
              margin: new go.Margin(6, 8, 6, 10)
            },
            new go.Binding("source", "image")),
          $(go.Panel, "Table",
            {
              maxSize: new go.Size(150, 999),
              margin: new go.Margin(6, 10, 0, 3),
              defaultAlignment: go.Spot.Left
            },
            $(go.RowColumnDefinition, { column: 2, width: 4 }),
            $(go.TextBlock, textStyle(),
              {
                row: 0, column: 0, columnSpan: 5,
                font: "12pt Segoe UI,sans-serif",
                isMultiline: false,
                minSize: new go.Size(10, 16)
              },
              new go.Binding("text", "name").makeTwoWay())
          )
        ),
        {
          toolTip:
            $(go.Adornment, "Auto",
              new go.Binding("visible", "key",
                function(t) { return t > 0; }),
              shapeStyle("SHAPE", "green", null),
              $(go.Panel, "Horizontal",
                $(go.Picture,
                  {
                    desiredSize: new go.Size(45, 60),
                    margin: new go.Margin(6, 8, 6, 10),
                    name: 'Picture'
                  },
                  new go.Binding("source", "image")),
                $(go.Panel, "Table",
                  {
                    defaultAlignment: go.Spot.Left,
                    margin: new go.Margin(6, 10, 0, 3),
                    maxSize: new go.Size(150, 1000)
                  },
                  $(go.RowColumnDefinition, { column: 2, width: 4 }),
                  $(go.TextBlock, textStyle(),
                    {
                      row: 0, column: 0, columnSpan: 5,
                      font: "15pt Segoe UI,sans-serif",
                      editable: true, isMultiline: false,
                      minSize: new go.Size(10, 16)
                    },
                    new go.Binding("text", "name").makeTwoWay()),
                  $(go.TextBlock, "Gender", textStyle(),
                    { row: 1, column: 0 }),
                  $(go.TextBlock, textStyle(),
                    {
                      minSize: new go.Size(10, 14),
                      row: 1, column: 1, columnSpan: 4,
                      margin: new go.Margin(0, 0, 0, 3),
                      editable: true, isMultiline: false
                    },
                    new go.Binding("text", "gender").makeTwoWay()),
                  $(go.TextBlock, "Role", textStyle(),
                    { row: 2, column: 0 }),
                  $(go.TextBlock, textStyle(),
                    {
                      row: 2, column: 1, columnSpan: 4,
                      minSize: new go.Size(10, 14),
                      isMultiline: false, editable: true,
                      margin: new go.Margin(0, 0, 0, 3)
                    },
                    new go.Binding("text", "role").makeTwoWay()),
                  $(go.TextBlock, "Birthday", textStyle(),
                    { row: 3, column: 0 }),
                  $(go.TextBlock, textStyle(),
                    {
                      editable: true, isMultiline: false,
                      margin: new go.Margin(0, 0, 0, 3),
                      row: 3, column: 1, columnSpan: 4,
                      minSize: new go.Size(10, 14)
                    },
                    new go.Binding("text", "birthday").makeTwoWay()
                  )
                )
              )
            )
        }
      );
    myFullDiagram.nodeTemplate = myNodeTemplate;
    myLocalDiagram.nodeTemplate = myNodeTemplate;

    // Define a basic link template, not selectable, shared by both diagrams
    var myLinkTemplate =
      $(go.Link,
        { routing: go.Link.Normal, selectable: false },
        $(go.Shape,
          { strokeWidth: 1 })
      );
    myFullDiagram.linkTemplate = myLinkTemplate;
    myLocalDiagram.linkTemplate = myLinkTemplate;

    // Create the full tree diagram
    setupDiagram();

    // Create a part in the background of the full diagram to highlight the selected node
    highlighter =
      $(go.Part, "Auto",
        {
          layerName: "Background",
          selectable: false,
          isInDocumentBounds: false,
          locationSpot: go.Spot.Center
        },
        $(go.Shape, "Ellipse",
          {
            fill: $(go.Brush, "Radial", { 0.0: "yellow", 1.0: "white" }),
            stroke: null,
            desiredSize: new go.Size(400, 400)
          })
        );
    myFullDiagram.add(highlighter);

    // Start by focusing the diagrams on the node at the top of the tree.
    // Wait until the tree has been laid out before selecting the root node.
    myFullDiagram.addDiagramListener("InitialLayoutCompleted", function(e) {
      var node0 = myFullDiagram.findPartForKey(0);
      if (node0 !== null) node0.isSelected = true;
      showLocalOnFullClick();
    });
  }

  // Make the corresponding node in the full diagram to that selected in the local diagram selected,
  // then call showLocalOnFullClick to update the local diagram.
  function showLocalOnLocalClick() {
    var selectedLocal = myLocalDiagram.selection.first();
    if (selectedLocal !== null) {
      // there are two separate Nodes, one for each Diagram, but they share the same key value
      myFullDiagram.select(myFullDiagram.findPartForKey(selectedLocal.data.key));
    }
  }

  function showLocalOnFullClick() {
    var node = myFullDiagram.selection.first();
    if (node !== null) {
      // make sure the selected node is in the viewport
      myFullDiagram.scrollToRect(node.actualBounds);
      // move the large yellow node behind the selected node to highlight it
      highlighter.location = node.location;
      // create a new model for the local Diagram
      var model = new go.TreeModel();
      // add the selected node and its children and grandchildren to the local diagram
      var nearby = node.findTreeParts(3);  // three levels of the (sub)tree
      // add parent and grandparent
      var parent = node.findTreeParentNode();
      if (parent !== null) {
        nearby.add(parent);
        var grandparent = parent.findTreeParentNode();
        if (grandparent !== null) {
          nearby.add(grandparent);
        }
      }
      // create the model using the same node data as in myFullDiagram's model
      nearby.each(function(n) {
          if (n instanceof go.Node) model.addNodeData(n.data);
        });
      myLocalDiagram.model = model;
      // select the node at the diagram's focus
      var selectedLocal = myLocalDiagram.findPartForKey(node.data.key);
      if (selectedLocal !== null) selectedLocal.isSelected = true;
    }
  }

  // Create the tree model containing TOTAL nodes, with each node having a variable number of children
  function setupDiagram(total) {
    // if (total === undefined) total = 100;  // default to 100 nodes
    var nodeDataArray = [];
    // for (var i = 0; i < total; i++) {
    //   nodeDataArray.push({
    //     key: nodeDataArray.length,
    //     color: go.Brush.randomColor()
    //   });
    // }
    // var j = 0;
    // for (var i = 1; i < total; i++) {
    //   var data = nodeDataArray[i];
    //   data.parent = j;
    //   if (Math.random() < 0.3) j++;  // this controls the likelihood that there are enough children
    // }
    nodeDataArray = [
      {key: 0, color: "#85b793", name: "A", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11},
      {key: 1, color: "#a0d8b6", name: "B", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 0},
      {key: 2, color: "#fda9d0", name: "C", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 1},
      {key: 3, color: "#9cd9f6", name: "D", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 1},
      {key: 6, color: "#a0e59c", name: "E", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 2},
      {key: 8, color: "#dacec2", name: "F", gender: "Male", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 3},
      {key: 7, color: "#92c3f3", name: "G", gender: "Female", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 2},
      {key: 10, color: "#f1aaf2", name: "H", gender: "Female", role: "1", birthday: "04/05/1888", image: "http://localhost:3000/assets/IMG_7151-32dadcd10b445bd755f5f025fb6f13101b474a6ba5401936c7c7e6813cf09906.JPG", total: 11, parent: 3}
    ]
    myFullDiagram.model = new go.TreeModel(nodeDataArray);
  }
});
