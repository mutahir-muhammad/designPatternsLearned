// State Interface (Tools)
class Tool {
    mouseDown() {
      throw new Error("mouseDown method must be implemented");
    }
  
    mouseUp() {
      throw new Error("mouseUp method must be implemented");
    }
  }
  
  // Concrete State: Selection Tool
  class SelectionTool extends Tool {
    mouseDown() {
      console.log("Selection Tool: Mouse down - Selecting area.");
    }
  
    mouseUp() {
      console.log("Selection Tool: Mouse up - Area selected.");
    }
  }
  
  // Concrete State: Pen Tool
  class PenTool extends Tool {
    mouseDown() {
      console.log("Pen Tool: Mouse down - Start drawing.");
    }
  
    mouseUp() {
      console.log("Pen Tool: Mouse up - Drawing stopped.");
    }
  }
  
  // Concrete State: Eraser Tool
  class EraserTool extends Tool {
    mouseDown() {
      console.log("Eraser Tool: Mouse down - Start erasing.");
    }
  
    mouseUp() {
      console.log("Eraser Tool: Mouse up - Erasing stopped.");
    }
  }
  
  // Context Class: Mouse Cursor
  class MouseCursor {
    constructor(initialTool) {
      this.currentTool = initialTool;
    }
  
    setTool(tool) {
      this.currentTool = tool;
      console.log(`Tool switched to ${tool.constructor.name}`);
    }
  
    mouseDown() {
      this.currentTool.mouseDown();
    }
  
    mouseUp() {
      this.currentTool.mouseUp();
    }
  }
  
  // Example usage
  (function demo() {
    // Start with the Selection Tool
    const cursor = new MouseCursor(new SelectionTool());
  
    // Mouse actions with Selection Tool
    cursor.mouseDown();
    cursor.mouseUp();
  
    // Switch to Pen Tool
    cursor.setTool(new PenTool());
    cursor.mouseDown();
    cursor.mouseUp();
  
    // Switch to Eraser Tool
    cursor.setTool(new EraserTool());
    cursor.mouseDown();
    cursor.mouseUp();
  })();
  