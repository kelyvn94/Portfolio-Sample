/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wayk6BAtstW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Furniture Collection</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our handpicked selection of stylish and comfortable furniture.
            </p>
          </div>
        </div>
        <div className="container grid max-w-6xl items-center justify-center gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-3 xl:max-w-6xl">
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Chair"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Comfy Chair</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">The perfect chair for reading and relaxation.</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Sofa"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Modern Sofa</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sleek design and ultimate comfort for your living room.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Table"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Coffee Table</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Adds a touch of elegance to your home decor.</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Shelves"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Bookshelves</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Organize your books with style and flair.</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Bed"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">King-size Bed</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Experience luxury and comfort in your bedroom.</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Lamp"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Desk Lamp</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Illuminate your workspace with this elegant lamp.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Couch"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Lounge Couch</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Relax in style with this chic and comfortable couch.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start space-y-2 border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-800">
            <img
              alt="Stool"
              className="object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="flex-1 p-4">
              <h3 className="font-bold">Bar Stool</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for your kitchen island or home bar.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  