import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detial__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">Delete</Link>
          </div>
        </div>
        <div>
        <h1>This is the post title!</h1>
        <div className="post-datail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
      </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nemo quisquam voluptatibus similique dolor numquam impedit eum, deserunt nulla nesciunt vel iure alias corporis nostrum eveniet expedita molestiae recusandae nobis! Culpa ab aspernatur ut minima labore, exercitationem dignissimos! A, eveniet.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quibusdam officiis? Porro quos itaque perspiciatis! Sunt distinctio dolor perspiciatis sint. Laboriosam officia aut quaerat? Ratione libero eos adipisci? Alias numquam rem ex, incidunt dolorum facilis nam natus voluptatem placeat et. Incidunt ut ab necessitatibus quia voluptates dicta nihil a quos laboriosam. Nam iste architecto voluptatem.</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, culpa aliquid. Veniam cum, aperiam, ullam corrupti illum eum dignissimos tenetur accusamus fugit, voluptate quas sint magni dolores quis tempora quisquam officiis enim? Quibusdam nostrum cupiditate corrupti ad animi recusandae quae, tempore, totam, saepe voluptatibus placeat. Natus soluta blanditiis ducimus ullam commodi pariatur magni, debitis tenetur eos sint aut enim placeat doloribus eum, fugiat est, voluptatem voluptate cum quam laudantium consequuntur. Est amet eius iure doloremque nisi voluptatibus sed, accusantium architecto saepe, tempore quod laudantium, commodi quidem temporibus provident animi. Nemo quasi blanditiis, culpa accusantium praesentium commodi, vero hic a veniam quaerat odio adipisci labore ipsa? Dolores sint officiis delectus quasi reiciendis.
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias doloribus eum sapiente assumenda voluptatem excepturi voluptate optio beatae dolorum ut animi tenetur dicta, nostrum, quidem laborum labore consequatur natus inventore? Quasi nobis temporibus magni deleniti vel, ipsa eum a sequi alias tenetur nihil laudantium consequuntur perspiciatis! Quaerat odit, praesentium illo blanditiis nemo a! Quidem ex, ab dolores repudiandae distinctio nostrum expedita alias deserunt aliquid! Quia reprehenderit similique est facere! Et possimus minima molestiae quod debitis modi minus ab quis maxime nobis, corporis pariatur totam eos laboriosam eaque explicabo reiciendis, fuga eius recusandae perspiciatis hic nulla nemo dignissimos. In velit architecto nisi incidunt? Id iste quisquam doloribus vel repudiandae, et architecto reprehenderit magnam eius, nulla repellendus soluta alias repellat in laborum molestias quae? Voluptatem, pariatur nostrum hic provident veniam, nihil earum debitis aut nulla sunt laudantium impedit, cupiditate eos. Aliquid magnam, obcaecati rem nostrum autem labore fuga iste, ratione voluptatem ex, explicabo repellat repudiandae. Sit, maxime ipsa provident, voluptas quasi unde, deleniti voluptatum mollitia esse a quae nobis veniam eos sequi enim minus ipsum? Totam, numquam libero officia tenetur dolore dicta. Soluta provident iure architecto facere impedit aut distinctio libero labore quas, eligendi consequatur quaerat, rem aperiam eveniet laudantium. Id iste dicta ab qui quas. Ratione omnis nam a distinctio excepturi, nisi illum repellat. Assumenda debitis totam amet deserunt explicabo, distinctio vero dolor excepturi iure deleniti, sint voluptate voluptas possimus ducimus est aliquid dolore! Voluptatum, quam! Sint modi laudantium pariatur, vel atque eum repellat incidunt commodi ad a distinctio alias eaque consequatur labore quod omnis, voluptas, placeat cupiditate iusto corporis iste at dicta non rerum? Libero ex error voluptates voluptatem facilis magnam recusandae. Nostrum commodi sed officiis minima recusandae dolore eaque dicta aliquid unde quae expedita sunt, quis mollitia deserunt, dolores, repudiandae aut numquam quia. Quidem sunt debitis fugit ut iusto eum, distinctio soluta, velit accusantium, et nam ipsa. Eius quisquam nemo sapiente accusantium harum nihil laboriosam cum quidem ab atque provident dignissimos totam eos eveniet corporis aperiam numquam deleniti, sit earum mollitia! Dolor eligendi repellendus, distinctio sapiente expedita eum ullam aspernatur quod unde dolore esse doloribus, tempore dicta! Quidem eaque cum nihil minus ducimus quis provident omnis atque ipsam alias dolores, reiciendis in tempore temporibus non impedit nulla? Ea sunt soluta rerum itaque non voluptates, et cumque illo perferendis nulla, iusto commodi unde! Provident qui perferendis exercitationem quo, harum, quos alias magnam consequuntur repellat hic perspiciatis molestiae praesentium ea ratione mollitia, incidunt tenetur? Sunt, explicabo blanditiis officia mollitia hic et molestiae ullam eius nulla ducimus ipsam harum id omnis alias doloremque culpa dolores voluptatem. Magnam provident modi reiciendis hic nisi aliquam nam nihil ducimus ea non et tempora quas, tenetur veritatis ullam suscipit consequuntur tempore eligendi. Ullam nesciunt illo rem minus dolorem esse maiores soluta vel dolor quibusdam omnis sint repellat perferendis modi mollitia eius eaque provident doloribus quaerat, temporibus nisi. Magnam odio quia fuga aliquam ad repellat praesentium, unde consectetur sequi sit repudiandae doloremque facere, nemo, nesciunt distinctio! Voluptas at velit voluptatem! Eos explicabo reiciendis eligendi architecto excepturi voluptatibus.
      </p>
      </div>
    </section>
  )
}

export default PostDetail