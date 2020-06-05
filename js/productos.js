let productos = [
    { titulo: 'Medias antiembólicas al muslo', categoria: 'Medias', subcategoria: 'Muslo & Rodilla', descripcion: 'Uso profiláctico para prevenir embolia profunda pulmonar y evitar la insuficiencia venosa. Disminiyen la posibilidad de Trombo-Embolia y mejoran el retorno Sanguíneo', features: ['De 18 & 25 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL, XXL'] },
    { titulo: 'Medias antiembólicas a la rodilla', categoria: 'Medias', subcategoria: 'Muslo & Rodilla', descripcion: 'Uso profiláctico para prevenir embolia profunda pulmonar y evitar la insuficiencia venosa.', features: ['De 25 MMHG', 'Graduada en Gradientes', '28% Poliamida 6/6 (Nylon)', '72% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Pantimedias mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguinea a las piernas. Además de usarse como prenda de vestir', features: ['De 20 a 15 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias a la rodilla mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Para mujeres que practican poca actividad física y quieren prevenir los problemas de várices. Ayuda a tener buena circulación sanguínea. Un producto muy cómodo de uso diario', features: ['De 25 a 18 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias al muslo mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prendas de vestir', features: ['De 25 a 12 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Calcetin Caballero mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de sentadas y que practican poca actividad física. Ayuda a prevenir los problemas de várices. Además de comodidad para el usuario', features: ['De 30 a 18 MMHG', 'Graduada en Gradientes', '72% Poliamida 6/6 (Nylon)', '28% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Pantimedias terapéuticas maternales', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias a la rodilla baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Para mujeres que practican poca actividad física y quieren prevenir los problemas de várices. Ayuda a tener buena circulación sanguínea. Un producto muy cómodo de uso diario', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Pantimedias baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguinea a las piernas. Además de usarse como prenda de vestir', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias al muslo baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prendas de vestir', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Calcetin Caballero baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de sentadas y que practican poca actividad física. Ayuda a prevenir los problemas de várices. Además de comodidad para el usuario', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '28% Poliamida 6/6 (Nylon)', '72% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias al muslo alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 35 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Pantimedias terapéuticas alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Medias a la rodilla alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
    { titulo: 'Vendas impregnadas con oxido de zinc', categoria: 'Vendas', subcategoria: 'Con o Sin Calamina', descripcion: 'Venda Elástica de tejido plano, impregnada con 27 g de oxido de zinc 10.2 cm x 9.1 m Descartable. Auxiliar en el tratamiento ambulatorio de piernas con úlceras, que deriven en: ', features: ['Estasis Venosa', 'Edema Linfático', 'Tromboflebitis', 'Eczema de las piernas'] },
    { titulo: 'Vendas impregnadas con oxido de zinc y calamina', categoria: 'Vendas', subcategoria: 'Con o Sin Calamina', descripcion: 'Venda Elástica de tejido plano, impregnada con 2 g de calamina y 27 g de oxido de zinc 10.2 cm x 9.1 m Descartable. Auxiliar en el tratamiento ambulatorio de piernas con úlceras, que deriven en: ', features: ['Estasis Venosa', 'Edema Linfático', 'Tromboflebitis', 'Eczema de las piernas'] },
    { titulo: 'Sujetador de tubo endotraqueal', categoria: 'Sujetadores', subcategoria: 'Tubo Endotraqueal', descripcion: 'Cintas de Esponja y velcro, canal plático para tubo, base adhesiva, descartable', features: [] },
    { titulo: 'Sujetador de sonda nasográtrica', categoria: 'Sujetadores', subcategoria: 'Nasogástricos', descripcion: 'Polímero adhesivo-tejido en forma de mariposa, con dos tiras de fijación, descartable', features: [] },
    { titulo: 'Sujetador de sonda foley-vesical', categoria: 'Sujetadores', subcategoria: 'Foley-Vesical', descripcion: 'Tela elástica con dispositivo de sujeción tipo velcro, libre de látex descartable', features: [] },
    { titulo: 'Sujetador para traqueostomo', categoria: 'Sujetadores', subcategoria: 'Traqueostomo', descripcion: 'Esponja con extremos de velctro para sujeción, regulable, libre de látex, descartable', features: [] },
    { titulo: 'Alfombra Antibacteriana', categoria: 'Alfombras', subcategoria: 'Eco Amigable', descripcion: 'Esta diseñada para ser localidad en la entrada de espacios que requieren una desinfección diaria y profunda. Tiene como fin la eliminación de bacterias presentes en el calzado. Alfombra antibactearana biohibrida, es el primer producto de control de contaminación que contiene materiales renovables a base de plantas, proporcionando una alternativa amigable con el medio ambiente para casas de salud socialmente responsables', features: ['Amigable con el medio ambiente: Es libre de GMO, recicable, a base de plantas, materiales de Cardia Biohybrid que reducen emsiones de CO2', 'Potenciador de imagen: Disminuye la huella visible de carbono', 'Recicable: Puede ser reciclado en cualquier flujo convencional de reciclado de plástico'] },
    { titulo: 'Papelería Médica Industrial', categoria: 'Papeleria', subcategoria: 'Rollos & Packs', descripcion: 'La papelería médica industrial sirve para capturar (imprimir) en forma exacta la información tomada por un equipo', features: ['Papel para monitor fetal', 'Papel para electrocardiógrafos', 'Papel para electroencefalogramas', 'Papel para ecografías', 'Papel para gasómetros', 'Toda aquella papelería que sea usada en un equipo médico'] },
    { titulo: 'Calentador de Talón Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Wargmel', descripcion: 'Sachet desechable, de gel, con cinta adhesiva, hipoalergénica, sin látex, no tóxico. Proporciona calor para aumentar el flujo sanguíneo y mejorar la recolección de muestras de sangre de bebés', features: ['Temperatura tras su activación 40°C', 'Gel no tóxico', 'Alcanza temperatura tras su activación', 'Caja por 25 sachets'] },
    { titulo: 'Colchón Transportador Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Transwarmer', descripcion: 'Colchón de transporte térmico de Gel, desechable, no tóxico. Ofrece calor durante el transporte de bebés dentro del hospital o de un hospital a otro. Evita las complicaciones del estrés por frío, distribución, uniforme del calor, proporciona soporte térmico rápido', features: ['Reduce el riesgo de hipotermia en Neonatos', 'Temperatura tras su activación 40°C por dos horas', 'Alcanza temperatura tras su activación en menos de 60 segundos'] },
    { titulo: 'Sujetador de tubo endotraqueal Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Neo-fit', descripcion: 'Estabilización rápida y segura del tubo endotraqueal. Diseñado para sujetar firmemente un tubo endotraqueal neonatal', features: ['Base plástica para la sujeción del tubo', 'Correa de Velcro que permite una rápida liberación y reajuste del tubo', 'Clips metálicos para sujetar mecánicamente el material blando del tubo', 'Almohadillas de espuma adhesivas y dos cintas de espuma adhesivas para extra fijación', 'Adhesivo hidrocoloide que es hipoalergénico'] },
    { titulo: 'Barrera Protectora del Septum Nasal', categoria: 'Neonatologia', subcategoria: 'Neonatología Skin Barrier', descripcion: 'Protectores de aislamiento del Setptum Nasal', features: ['Para su uso en procedimientos nasales con cánulas', 'Hipoalergénicos', 'Fabricado sin Latex', 'Precortados en tamaños pequeño y grande', '8 unidades por sobre, 10 sobres por caja, 3 cajas x carton'] },
    { titulo: 'Infant Nasal CPAP Assembly', categoria: 'Neonatologia', subcategoria: 'Neonatología INCA', descripcion: 'Para la administración de presión positiva contínua en la vía aérea (CPAP) en pacientes neonatos. La cánula transparente y extra suave ayuda a mantener la integridad del tejido. 5 tamaños de cánulas nasales. El tubo Stay-Flex proporciona adaptación y una máxima estabilidad. Cubos de esponja proporcionan una colocación segura y estabilidad. La cinta para la barbilla minima el derrame de saliva.', features: ['Se comercializa en: Sets Completos', 'Reemplazos del set: Canula nasa, 2 tubos stay-flex, dos adaptadores para tubos, un adapatador a presión en forma T', 'Accesorios: Gorro con cintas de velcro, cubos de esponja, cinta para la barbilla con Velcro'] },
    { titulo: 'Vacuum-Assisted Delivery System', categoria: 'Ginecologia', subcategoria: 'MityOne', descripcion: 'MityOne está diseñada para ayudar al médico en el parto de un bebé durante su alumbramiento. MityOne es un sistema integrado de bomba y copa, empaquetado y esterilizado para su uso inmediato.', features: [] },
    { titulo: 'Vacuum-Assisted Delivery System', categoria: 'Ginecologia', subcategoria: 'MityVac', descripcion: 'La bomba de extracción por vacío obstétrica reutilizable Mityvac proporciona al vacío necesario para ayudar al parto del feto tanto en nacimientos vaginales como por cesárea. Es un dispositivo de mano funciona manualmente y puede utilizarse en las proximidades del oxígeno. La bomba de vacío obstétrica reutilizable Mityvac puede utilizarse dentro o fuera del campo estéril', features: [] },
];

cont = 1;
for (let producto of productos) {
    let content2 = `<div class="col-sm-4 col-md-2 items ${producto.categoria} mt-30px">
    <div class="work-image p-relative o-hidden">
        <img src="images/productos/${cont}.jpg" alt="image">
        <a data-toggle="modal" data-target="#productModal${cont}" style="cursor:pointer"> <div class="overlay-bg-85 p-absolute transition-5 flex-bottom">
           
                <i class="fa fa-image text-center p-absolute color-fff bg-orange-hvr radius-50"></i>
            
            <div class="p-15px">
                <span class="small transition-5 color-eee fw-600 mb-0px">${producto.titulo}</span><br>
                <span class="small color-777">${producto.subcategoria}</span>
            </div>
        </div></a>
    </div>
    <div class="modal fade" id="productModal${cont}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Información del Producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <img src="images/productos/${cont}.jpg" alt="image">
                        </div>
                        <div class="col-8">
                            <h1 class="title-h p-relative">
                                <span class="fw-200">${producto.titulo}</span>
                                <span class="line p-absolute bg-orange"></span>
                            </h1>
                            <p class="mt-3">${producto.descripcion}</p>
                            <p class="mt-3">Caractéristicas:</p>
                            <ul id="features${cont}" class="mt-3 list-group">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    let content = `<div class="col-md-3 col-sm-6 items ${producto.categoria}">
    <a data-toggle="modal" data-target="#productModal${cont}" style="cursor:pointer"><div class="product-grid2">
        <div class="product-image2">
            <img class="pic-1" src="images/productos_alt/${cont}.jpg">
            <img class="pic-2" src="images/productos_alt/${cont}.jpg">
        </div>
        <div class="product-content">
            <h3 class="title">${producto.titulo}</h3>
        </div>
    </div></a>
    <div class="modal fade" id="productModal${cont}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Información del Producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-4">
                            <img src="images/productos/${cont}.jpg" alt="image">
                        </div>
                        <div class="col-8">
                            <h1 class="title-h p-relative">
                                <span class="fw-200">${producto.titulo}</span>
                                <span class="line p-absolute bg-orange"></span>
                            </h1>
                            <p class="mt-3">${producto.descripcion}</p>
                            <p class="mt-3">Caractéristicas:</p>
                            <ul id="features${cont}" class="mt-3 list-group">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
    $('#productos').append(content);
    for (let feature of producto.features) {
        let featurecontent = `<li class="list-group-item"><span class="small">${feature}</span></li>`;
        $('#features' + cont).append(featurecontent);
    }
    cont++;
}