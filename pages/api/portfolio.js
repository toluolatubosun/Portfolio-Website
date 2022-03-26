
export default function handler(req, res) {
    res.status(200).json([
        {
            "id": 1,
            "title": "Hello World",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor lectus tempor nisl aliquam lacinia.",
            "img": "/N-Time.png",
            "url": "https://n-time.web.app"
        }
    ])
  }
  