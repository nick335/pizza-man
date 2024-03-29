import { Helmet } from 'react-helmet'

interface props {
  page: string
  href: string
}

const SEOPAGEHeader = ({ page, href }: props) => {
  return (
    <Helmet>
      <title>{page} - PizzaMan Delivery Website</title>
      <link rel='canonical' href={href} />
    </Helmet>
  )
}

export default SEOPAGEHeader
