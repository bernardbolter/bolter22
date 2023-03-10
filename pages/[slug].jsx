import { getStaticArtworkPaths, getFullArtworkProps } from '../lib/api'
import ArtworkFullStyle from "../styles/artworkFull.style"

const ArtworkFull = ({ fullArtworkData }) => {
    console.log(fullArtworkData)
    return (
        <ArtworkFullStyle>
            <div className="artwork-full-container">
                <h1>Full Artwork</h1>
            </div>
        </ArtworkFullStyle>
    )
}

export default ArtworkFull

export async function getStaticPaths() {
    const staticPaths = await getStaticArtworkPaths()
    console.log(staticPaths)

    const paths = staticPaths.allArtwork.nodes.map(artwork => ({
        params: { slug: artwork.slug }
    }))

    return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const allSlugs = await getStaticArtworkPaths();
    const artId = await allSlugs.allArtwork.nodes.filter(data => data.slug === params.slug);
    console.log("art id", artId);
    const fullArtworkData = await getFullArtworkProps(artId[0].id);

    return {
      props: {
        fullArtworkData,
      },
      revalidate: 10,
    };
}
