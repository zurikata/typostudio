const { parseMultipartData, sanitizeEntity } = require('strapi-utils');



module.exports = {
    async create(ctx){
        let entity;
        if(ctx.is('multipart')){
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.contactos.create(data, { files });
        } else {
            entity = await strapi.services.contactos.create(ctx.request.body);
        }
        entry = sanitizeEntity(entity, { model: strapi.models.contactos });

            // send an email by using the email plugin
            await strapi.plugins['email'].services.email.send({
             to: 'avelascoe@zurikata.com',
             from: 'avelascoe@zurikata.com',
             subject: 'Mensaje enviado por el portal',
              text: `
               Mensaje:
              `,
          });

          return entry;
    },
};
