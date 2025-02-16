import DraggableSections from "../components/DraggableSection";


export default function HomePage() {
  const sections = [
    {
      id: 1,
      title: "HTML",
      description: "Description",
      items: [
        { id: 1, title: "Paragraph", type: "Video" },
        { id: 2, title: "Links", type: "Video" },
        { id: 3, title: "Lists", type: "Article" },
      ],
    },
    {
      id: 2,
      title: "CSS",
      description: "Description",
      items: [
        { id: 4, title: "Selectors", type: "Video" },
        { id: 5, title: "Flexbox", type: "Video" },
        { id: 6, title: "Grid", type: "Article" },
      ],
    },
  ];

  return (
    <div className="p-6">
      <DraggableSections sections={sections} />
    </div>
  );
}
