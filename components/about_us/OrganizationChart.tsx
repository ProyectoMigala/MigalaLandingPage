
type OrganizationChartProps = {
  chart: string
}

const OrganizationChart = ({ chart }: OrganizationChartProps) => {

  return (
    <>
      <img
        className="organization-chart-image"
        src={chart}
        alt="organization chart"
      />


      <style jsx>{`
        .organization-chart-image {
          width: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  )

}

export default OrganizationChart