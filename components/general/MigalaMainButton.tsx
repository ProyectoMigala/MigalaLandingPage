type MigalaMainButtonProps = {
  title: string,
  onClick: () => void,
  extraClassName?: string
}

export const MigalaMainButton = ({title, onClick, extraClassName}: MigalaMainButtonProps) => {


  return <>
    <div
      className={`migala-button ${extraClassName}`}
      onClick={() => onClick()}
    >
      <span>{title}</span>
    </div>

    <style jsx>{`
      .migala-button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #7e2099;
        width: 250px;
        border-radius: 30px;
        padding: 15px;
      }

      .migala-button > span {
        color: white;
        font-weight: bold;
        font-size: calc(12px + 1vmin);
      }
    `}</style>
  </>

}