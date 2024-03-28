import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";
import ProgressBar from "./ProgressBar";

const TicketCard = () => {
  return (
    <div className="flex flex-col rounded-md shadow-lg bg-card hover:bg-card-hover p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="">Ticket title</h4>
      <hr className="h-px border-0 bg-page mb-2 whitespace-pre-wrap" />
      <p>This is the ticket description! Please do this</p>
      <div className="flex-grow">
        <div className=" flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">28/03/2024 2:00pm</p>
            <ProgressBar />
          </div>
        </div>
      </div>
      <div className="flex items-end ml-auto">
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TicketCard;
