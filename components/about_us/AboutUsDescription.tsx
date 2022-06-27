type AboutUsDescriptionProps = {
  description: string
}

const AboutUsDescription = ({description}: AboutUsDescriptionProps) => {

  return (
    <>

      <div className="about-us-description">
        {description}
      </div>

      <style jsx>{`
        .about-us-description {
          text-align: justify;
          font-size: calc(16px + 1vmin);
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}

export default AboutUsDescription