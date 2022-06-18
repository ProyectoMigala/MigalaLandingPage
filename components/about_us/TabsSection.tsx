export type TabItem = {
  title: string,
  keyCode: string,
  isActive: Boolean
}

type TabSectionProps = {
  items: Array<TabItem>,
  onTabClicked?: (itemClicked: string) => void
}


const TabsSection = ({items, onTabClicked}: TabSectionProps) => {
  return (
    <>

      <div className="tabs-wrapper">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`tab-item ${item.isActive && "active"}`}
            onClick={() => onTabClicked && onTabClicked(item.keyCode)}
          >
            <span className="tab-item-title">{item.title}</span>
          </div>
        ))

        }
      </div>


      <style jsx>{`
        .tabs-wrapper {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          width: 80%;
        }

        .tab-item {
          cursor: pointer;
          flex: 1;
          display: inherit;
          justify-content: center;
          align-items: center;
          padding: 15px;
          user-select: none;
        }

        .tab-item:hover,
        .tab-item.active {
          background-color: #ebebeb;
        }

        .tab-item > span {
          font-weight: bold;
          text-align: center;
        }

      `}
      </style>

    </>
  )
}

export default TabsSection
