import React from "react";
import "./orgchart.css";

export default function OrgChart() {
  const leftColumn = [
    "Sales Manager",
    "Chief Accountant",
    "Accountant",
    "Cashier / Accounts Clerk",
  ];

  const middleColumn = [
    "Purchasing Manager",
    "Chief Accountant",
    "Accountant",
    "Cashier / Accounts Clerk",
  ];

  const rightColumn = ["Engineer", "Foreman", "Technicians", "Helpers"];

  const renderColumn = (items) => (
    <div className="org-column">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="org-box">{item}</div>
          {/* vertical connector between items (hidden for last item) */}
          {idx < items.length - 1 && <div className="org-connector-vertical" />}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 org-wrap">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top nodes (centered) */}
        <div className="flex flex-col items-center gap-4">
          <div className="org-box">Managing Director</div>
          <div className="org-connector-vertical" style={{ height: 24 }} />
          <div className="org-box">General Manager</div>
        </div>

        {/* Horizontal connector with arrow and 3 downward branches (desktop) */}
        <div className="org-horizontal-wrap">
          <div className="org-line-horizontal"></div>

          {/* decorative arrow on right side of the horizontal line */}
          <div className="org-arrow"></div>

          {/* positioned branch connectors for desktop */}
          <div className="org-connector-pos left">
            <div className="org-branch-connector" />
          </div>
          <div className="org-connector-pos center">
            <div className="org-branch-connector" />
          </div>
          <div className="org-connector-pos right">
            <div className="org-branch-connector" />
          </div>
        </div>

        {/* Columns - left / center / right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6 items-start">
          <div className="flex justify-center">{renderColumn(leftColumn)}</div>
          <div className="flex justify-center">
            {renderColumn(middleColumn)}
          </div>
          <div className="flex justify-center">{renderColumn(rightColumn)}</div>
        </div>
      </div>
    </section>
  );
}
