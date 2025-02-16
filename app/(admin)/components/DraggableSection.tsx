"use client";

import { useState } from "react";
import {Button} from "@heroui/button";
import { FaGripVertical } from "react-icons/fa";

interface Item {
  id: number;
  title: string;
  type: string;
}

interface Section {
  id: number;
  title: string;
  description: string;
  items: Item[];
}

interface DraggableSectionsProps {
  sections: Section[];
}

export default function DraggableSections({ sections }: DraggableSectionsProps) {
  const [data, setData] = useState(sections);
  const [draggingSection, setDraggingSection] = useState<number | null>(null);
  const [draggingItem, setDraggingItem] = useState<{ sectionIndex: number; itemIndex: number } | null>(null);

  const handleSectionDragStart = (index: number) => {
    setDraggingSection(index);
  };

  const handleSectionDrop = (targetIndex: number) => {
    if (draggingSection === null || draggingSection === targetIndex) return;

    const updatedSections = [...data];
    const draggedSection = updatedSections.splice(draggingSection, 1)[0];
    updatedSections.splice(targetIndex, 0, draggedSection);

    setData(updatedSections);
    setDraggingSection(null);
  };

  const handleItemDragStart = (sectionIndex: number, itemIndex: number) => {
    setDraggingItem({ sectionIndex, itemIndex });
  };

  const handleItemDrop = (sectionIndex: number, targetItemIndex: number) => {
    if (!draggingItem || draggingItem.sectionIndex !== sectionIndex || draggingItem.itemIndex === targetItemIndex) return;

    const updatedSections = [...data];
    const items = updatedSections[sectionIndex].items;
    const draggedItem = items.splice(draggingItem.itemIndex, 1)[0];
    items.splice(targetItemIndex, 0, draggedItem);

    setData(updatedSections);
    setDraggingItem(null);
  };

  return (
    <div className="space-y-6">
      {data.map((section, sectionIndex) => (
        <div
          key={section.id}
          draggable
          onDragStart={() => handleSectionDragStart(sectionIndex)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleSectionDrop(sectionIndex)}
          className="bg-white border border-gray-200 rounded-lg p-4 w-full shadow-sm cursor-grab"
        >
   
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-3">
              <FaGripVertical className="text-gray-400" />
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-gray-500 text-sm">{section.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-gray-100 text-gray-700 rounded-md px-3 py-1 text-sm shadow-sm">Add Materials</Button>
              <Button className="bg-gray-100 text-gray-700 rounded-md px-3 py-1 text-sm shadow-sm">Quick Actions</Button>
            </div>
          </div>

          {section.items.map((item, itemIndex) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleItemDragStart(sectionIndex, itemIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleItemDrop(sectionIndex, itemIndex)}
              className="flex items-center justify-between border-t py-3 cursor-grab hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <FaGripVertical className="text-gray-400" />
                <span className="font-medium text-gray-800">{item.title}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.type}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
