let productos = [
  { imagen: 1, titulo: 'Medias antiembólicas al muslo', categoria: 'Medias', subcategoria: 'Muslo & Rodilla', descripcion: 'Uso profiláctico para prevenir embolia profunda pulmonar y evitar la insuficiencia venosa. Disminuyen la posibilidad de Trombo-Embolia y mejoran el retorno sanguíneo', features: ['De 18 & 25 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL, XXL'] },
  { imagen: 2, titulo: 'Medias antiembólicas a la rodilla', categoria: 'Medias', subcategoria: 'Muslo & Rodilla', descripcion: 'Uso profiláctico para prevenir embolia profunda pulmonar y evitar la insuficiencia venosa.', features: ['De 25 MMHG', 'Graduada en Gradientes', '28% Poliamida 6/6 (Nylon)', '72% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 3, titulo: 'Pantimedias mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prenda de vestir', features: ['De 20 a 15 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 4, titulo: 'Medias a la rodilla mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Para mujeres que practican poca actividad física y quieren prevenir los problemas de várices. Ayuda a tener buena circulación sanguínea. Un producto muy cómodo de uso diario', features: ['De 25 a 18 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 5, titulo: 'Medias al muslo mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prendas de vestir', features: ['De 25 a 12 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 6, titulo: 'Calcetín Caballero mediana compresión', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a prevenir los problemas de várices. Además de comodidad para el usuario', features: ['De 30 a 18 MMHG', 'Graduada en Gradientes', '72% Poliamida 6/6 (Nylon)', '28% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 7, titulo: 'Pantimedias terapéuticas maternales', categoria: 'Medias', subcategoria: 'Mediana Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 8, titulo: 'Medias a la rodilla baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Para mujeres que practican poca actividad física y quieren prevenir los problemas de várices. Ayuda a tener buena circulación sanguínea. Un producto muy cómodo de uso diario', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 9, titulo: 'Pantimedias baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prenda de vestir', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 10, titulo: 'Medias al muslo baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de pie o sentadas y que practican poca actividad física. Ayuda a combatir los problemas de várices y genera óptima irrigación sanguínea a las piernas. Además de usarse como prendas de vestir', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 11, titulo: 'Calcetín Caballero baja compresión', categoria: 'Medias', subcategoria: 'Baja Compresión', descripcion: 'Se recomiendan para personas que pasan mucho tiempo de sentadas y que practican poca actividad física. Ayuda a prevenir los problemas de várices. Además de comodidad para el usuario', features: ['De 15 a 8 MMHG', 'Graduada en Gradientes', '28% Poliamida 6/6 (Nylon)', '72% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 12, titulo: 'Medias al muslo alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 35 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 13, titulo: 'Pantimedias terapéuticas alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 14, titulo: 'Medias a la rodilla alta compresión', categoria: 'Medias', subcategoria: 'Alta Compresión', descripcion: 'Para personas con problemas de várices, ya desarrollados. Para mejorar el retorno sanguíneo', features: ['De 40 a 20 MMHG', 'Graduada en Gradientes', '78% Poliamida 6/6 (Nylon)', '22% Elastano Spandez (Lycra)', 'Mr Doble Cover', 'Tallas: S, M, L, XL'] },
  { imagen: 15, titulo: 'Vendas impregnadas con óxido de zinc', categoria: 'Vendas', subcategoria: 'Con o Sin Calamina', descripcion: 'Venda Elástica de tejido plano, impregnada con 27 g de óxido de zinc 10.2 cm x 9.1 m Descartable. Auxiliar en el tratamiento ambulatorio de piernas con úlceras, que deriven en: ', features: ['Estasis Venosa', 'Edema Linfático', 'Tromboflebitis', 'Eczema de las piernas'] },
  { imagen: 16, titulo: 'Vendas impregnadas con óxido de zinc y calamina', categoria: 'Vendas', subcategoria: 'Con o Sin Calamina', descripcion: 'Venda Elástica de tejido plano, impregnada con 2 g de calamina y 27 g de óxido de zinc 10.2 cm x 9.1 m Descartable. Auxiliar en el tratamiento ambulatorio de piernas con úlceras, que deriven en: ', features: ['Estasis Venosa', 'Edema Linfático', 'Tromboflebitis', 'Eczema de las piernas'] },
  { imagen: 17, titulo: 'Drawtex', categoria: 'Sujetadores', subcategoria: 'Tubo Endotraqueal', descripcion: 'Es un apósito hidroconductivo avanzado con tecnología LevaFiber®, diseñado para levantar, mantener, transferir y extraer eficazmente el exudado directamente desde el lecho de la herida. Gracias a su triple mecanismo de acción —capilar, hidroconductora y electrostática—, facilita un manejo superior del exudado, ayudando a reducir la carga bacteriana y a mantener un ambiente óptimo para la cicatrización. Su estructura única permite la remoción no traumática del exudado sin dañar el tejido sano, lo que lo convierte en una solución ideal para el tratamiento de heridas agudas y crónicas.', features: ['Levanta, mantiene, transfiere y extrae exudado del lecho de la herida', 'Acción capilar', 'Acción hidroconductora', 'Acción electrostática'] },
  { imagen: 21, titulo: 'Electrobioral', categoria: 'Alfombras', subcategoria: 'Eco Amigable', descripcion: 'Es una solución ácida electrolizada de flujo controlado (SAEFC), diseñada para facilitar la desbridación y promover la cicatrización en heridas agudas y crónicas. Su fórmula sin cloro libre ni químicos activos agresivos permite una acción germicida efectiva sin ser citotóxica, protegiendo así el tejido sano. Con un pH ácido de 2.0 a 2.9 y un potencial de oxidación (ORP) superior a 1100mV, ELECTROBIORAL ofrece un barrido y control bacteriano avanzado. Su tecnología de super-oxidación lo convierte en un dispositivo médico innovador, ideal para el tratamiento de heridas bajo estándares clínicos de seguridad y eficacia.', features: ['Facilita la desbridación', 'Ayuda a la cicatrización', 'Barrido y control bacteriano', 'Sin cloro libre', 'Sin químicos activos', 'pH ácido de 2.0 a 2.9', 'ORP mayor a 1100mV', 'Germicida no citotóxico'] },
  { imagen: 22, titulo: 'Monitores Fetales', categoria: 'Papeleria', subcategoria: 'Rollos & Packs', descripcion: 'La papelería médica industrial sirve para capturar (imprimir)...', features: ['Papel para monitor fetal', 'Papel para electrocardiógrafos', 'Papel para electroencefalogramas', 'Papel para ecografías', 'Papel para gasómetros', 'Toda aquella papelería que sea usada en un equipo médico'] },
  { imagen: 23, titulo: 'Calentador de Talón Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Wargmel', descripcion: 'Sachet desechable, de gel, con cinta adhesiva, hipoalergénica...', features: ['Temperatura tras su activación 40°C', 'Gel no tóxico', 'Alcanza temperatura tras su activación', 'Caja por 25 sachets'] },
  { imagen: 24, titulo: 'Colchón Transportador Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Transwarmer', descripcion: 'Colchón de transporte térmico de Gel, desechable, no tóxico...', features: ['Reduce el riesgo de hipotermia en Neonatos', 'Temperatura tras su activación 40°C por dos horas', 'Alcanza temperatura tras su activación en menos de 60 segundos'] },
  { imagen: 25, titulo: 'Sujetador de tubo endotraqueal Neonatal', categoria: 'Neonatologia', subcategoria: 'Neonatología Neo-fit', descripcion: 'Estabilización rápida y segura del tubo endotraqueal...', features: ['Base plástica para la sujeción del tubo', 'Correa de Velcro...', 'Clips metálicos...', 'Almohadillas de espuma...', 'Adhesivo hidrocoloide...'] },
  { imagen: 26, titulo: 'Barrera Protectora del Septum Nasal', categoria: 'Neonatologia', subcategoria: 'Neonatología Skin Barrier', descripcion: 'Protectores de aislamiento del Setptum Nasal...', features: ['Para su uso en procedimientos nasales con cánulas', 'Hipoalergénicos', 'Fabricado sin Látex', 'Precortados en tamaños...', '8 unidades por sobre...'] },
  { imagen: 27, titulo: 'Infant Nasal CPAP Assembly', categoria: 'Neonatologia', subcategoria: 'Neonatología INCA', descripcion: 'Para la administración de presión positiva contínua en la vía aérea...', features: ['Se comercializa en: Sets Completos', 'Reemplazos del set...', 'Accesorios: Gorro...'] },
  { imagen: 28, titulo: 'Vacuum-Assisted Delivery System', categoria: 'Ginecologia', subcategoria: 'MityOne', descripcion: 'MityOne está diseñada para ayudar al médico en el parto...', features: [] },
  { imagen: 29, titulo: 'Vacuum-Assisted Delivery System', categoria: 'Ginecologia', subcategoria: 'MityVac', descripcion: 'La bomba de extracción por vacío obstétrica reutilizable...', features: [] },
  { imagen: 30, titulo: 'Electrocardiogramas (ECG)', categoria: 'Papeleria', subcategoria: 'Rollos & Packs', descripcion: 'La papelería médica industrial sirve para capturar...', features: ['Papel para monitor fetal', 'Papel para electrocardiógrafos', 'Papel para electroencefalogramas', 'Papel para ecografías', 'Papel para gasómetros', 'Toda aquella papelería que sea usada en un equipo médico'] },
  { imagen: 31, titulo: 'Desfibriladores', categoria: 'Papeleria', subcategoria: 'Rollos & Packs', descripcion: 'La papelería médica industrial sirve para capturar...', features: ['Papel para monitor fetal', 'Papel para electrocardiógrafos', 'Papel para electroencefalogramas', 'Papel para ecografías', 'Papel para gasómetros', 'Toda aquella papelería que sea usada en un equipo médico'] },
  { imagen: 32, titulo: 'Otros equipos', categoria: 'Papeleria', subcategoria: 'Rollos & Packs', descripcion: 'La papelería médica industrial sirve para capturar...', features: ['Papel para monitor fetal', 'Papel para electrocardiógrafos', 'Papel para electroencefalogramas', 'Papel para ecografías', 'Papel para gasómetros', 'Toda aquella papelería que sea usada en un equipo médico'] }
];


cont = 1;
for (let producto of productos) {
    let stringCar = '<p class="mt-3">Características:</p>';
    if (producto.features.length === 0) {
        stringCar = '';
    }
    let content = `<div class="col-md-3 col-sm-6 items ${producto.categoria}">
    <a data-toggle="modal" data-target="#productModal${cont}" style="cursor:pointer"><div class="product-grid2">
        <div class="product-image2">
            <img class="pic-1" src="images/productos_alt/${producto.imagen}.jpg">
            <img class="pic-2" src="images/productos_alt/${producto.imagen}.jpg">
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
                            <img src="images/productos/${producto.imagen}.jpg" alt="image">
                        </div>
                        <div class="col-8">
                            <h1 class="title-h p-relative">
                                <span class="fw-200">${producto.titulo}</span>
                                <span class="line p-absolute bg-orange"></span>
                            </h1>
                            <p class="mt-3">${producto.descripcion}</p>
                            ${stringCar}
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