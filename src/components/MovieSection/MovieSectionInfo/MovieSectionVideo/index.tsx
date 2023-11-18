interface props {
  videoUrl: string
}

export default function MovieSectionVideo({
  videoUrl
}: props) {
  return (
    <div className="movie-section-video">
      <video src={videoUrl} autoPlay loop muted></video>
    </div>
  )
}