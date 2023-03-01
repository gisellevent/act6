//Tarea 1. Calcular la tarifa diaria dada una tarifa por hora:

//Un cliente se pone en contacto con el freelancer para preguntar sobre sus tarifas. 
//El freelancer explica que trabajan 8 horas al día. Sin embargo, 
//el freelancer solo conoce sus tarifas por hora para el proyecto. 
//Ayúdelos a estimar una tarifa diaria dada una tarifa por hora.

function dayRate(dias)
{
    const diastotal = dias * 8;
    return diastotal;
}

document.write("La tarifa diaria dada una tarifa por hora es: ", dayRate(89));



//Tarea 2. Calcular el número de días de trabajo dado un presupuesto fijo:

//Otro día, el jefe de proyecto le ofrece al freelancer trabajar en un proyecto con un presupuesto fijo. 
//Dado el presupuesto fijo y la tarifa por hora del freelancer, 
//ayúdelo a calcular la cantidad de días que trabajaría hasta que se agote el presupuesto. 
//El resultado debe redondearse hacia abajo al número entero más cercano.

function daysInBudget(presupuesto, dias)
{
    const horastotal = dias * 8;
    
    const diastotal = Math.floor(presupuesto / horastotal);
    return diastotal;
}

document.write("<br>")
document.write("El número de días de trabajo dado un presupuesto fijo es: ", daysInBudget(20000, 89));



//Tarea 3. Calcule la tasa de descuento para grandes proyectos:

//A menudo, los clientes del freelancer lo contratan para proyectos que abarcan varios meses. 
//En estos casos, el freelancer decide ofrecer un descuento por cada mes completo, 
//y los días restantes se facturan a tarifa diaria. Cada mes tiene 22 días facturables. 
//Ayúdelos a estimar el costo de dichos proyectos, dada una tarifa por hora, 
//la cantidad de días que dura el proyecto y una tasa de descuento mensual. 
//El descuento siempre se pasa como un número, donde 42% se convierte en 0.42. 
//El resultado debe redondearse al número entero más próximo.

function priceWithMonthlyDiscount(dias, tasa, descuento)
{
    
    const horastotal = dias * 8;

    const tasaDesceunto = tasa * (1 - descuento);

    const prectiototal = Math.round(horastotal * tasaDesceunto);
    return prectiototal;
}

document.write("<br>")
document.write("La tasa de descuento para grandes proyectos es: ", priceWithMonthlyDiscount(89, 230, 0.42));
