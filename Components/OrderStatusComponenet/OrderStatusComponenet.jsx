import Link from "next/link";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const initialData = {
  pending: [
    { id: "1", name: "Jeanette Russel",taskId:"#ORD-0023" },
    { id: "2", name: "Ken Brown" ,taskId:"#ORD-0022" },
    { id: "3", name: "Kristin Murray" ,taskId:" #ORD-0020" },
  ],
  inProgress: [
    { id: "4", name: "Kristin Murray",taskId:"#ORD-0025"  },
  ],
  readytodeliver: [
    { id: "5", name: "Lynn Hicks",taskId:"#ORD-0024"  },
    { id: "6", name: "Owen Ruiz",taskId:"#ORD-0021"  },
    { id: "7", name: "Catherine Wheeler",taskId:"#ORD-0019"  }
  ],
};

function OrderStatusComponent() {
  const [data, setData] = useState(initialData);


const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data[source.droppableId];
    const finish = data[destination.droppableId];

    if (start === finish) {
      const newCardData = Array.from(start);
      const [movedCard] = newCardData.splice(source.index, 1);
      newCardData.splice(destination.index, 0, movedCard);

      const newState = {
        ...data,
        [source.droppableId]: newCardData,
      };

      setData(newState);
    } else {
      const startCardData = Array.from(start);
      const [movedCard] = startCardData.splice(source.index, 1);

      const finishCardData = Array.from(finish);
      finishCardData.splice(destination.index, 0, movedCard);

      const newState = {
        ...data,
        [source.droppableId]: startCardData,
        [destination.droppableId]: finishCardData,
      };

      setData(newState);
    }

    toast.success("Task moved successfully!");
  };


  return (
    <>
      <h4 className="mx-3">Order Status</h4>
      <span className="mx-3" style={{ fontSize: "12px" }}>
        <Link href="/">Dashboard</Link> / <Link href="/order">Order</Link> / Order Status
      </span>
      <div className="mt-2">
        <div className="col-md-12">
          <div className="card mx-3">
            <div className="card-body p-0">
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="px-3 py-3 d-flex justify-content-between">
                  {["pending", "inProgress", "readytodeliver"].map((status) => (
                    <Droppable key={status} droppableId={status}>
                      {(provided) => (
                        <div
                          className="card col me-2"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          
                        >
                          <div className="px-3 py-1 featureTitle"  style={{fontWeight: "600",
                            backgroundColor: status === "pending" ? "#6c757e" : status === "inProgress" ? "#fec107" : "#007bff",
                            borderRadius: "2px",
                          
                            padding: "10px",
                          }}>
                            {status === "pending" ? "Pending" : status === "inProgress" ? "Processing" : "Ready to Deliver"}
                          </div>
                          {data[status].map((card, index) => (
                            <Draggable key={card.id} draggableId={card.id} index={index}>
                              {(provided) => (
                                <div
                                  className="d-flex card mb-2 mx-2 my-1"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    // padding: "10px",
                                    backgroundColor: "white",
                                    // border: "1px solid gray",
                                    padding:"10px",
                                    borderRadius: "4px",
                                  }}
                                >
                                    <div className="d-flex justify-content-between">

                                  <div >{card?.name}</div>
                                  <div >{card?.taskId}</div>
                                    </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  ))}
                </div>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OrderStatusComponent;
