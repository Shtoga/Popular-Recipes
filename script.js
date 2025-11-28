// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Данные рецептов
    const recipes = [
        // Основные блюда
        {
            id: 1,
            title: "Паста Карбонара",
            image: "media/recipe1.jpg",
            time: "30 мин",
            difficulty: "Средняя",
            description: "Классическая итальянская паста с беконом, сыром и яйцом.",
            ingredients: [
                "400 г спагетти",
                "200 г гуанчиале или панчетты",
                "4 яичных желтка",
                "100 г пармезана",
                "Свежемолотый черный перец",
                "Соль"
            ],
            instructions: [
                "Поставьте большую кастрюлю с подсоленной водой на огонь.",
                "Нарежьте гуанчиале небольшими кубиками и обжарьте до хрустящей корочки.",
                "Взбейте яичные желтки с тертым пармезаном и черным перцем.",
                "Отварите спагетти аль денте, сохраните немного воды от pasta.",
                "Смешайте горячие спагетти с гуанчиале, затем добавьте яичную смесь.",
                "Быстро перемешайте, добавляя немного воды от pasta для создания крема.",
                "Подавайте сразу с дополнительным пармезаном и перцем."
            ],
            calories: "520 ккал",
            category: "Основные блюда"
        },
        {
            id: 2,
            title: "Цезарь с курицей",
            image: "media/recipe3.jpg",
            time: "25 мин",
            difficulty: "Легкая",
            description: "Салат с хрустящим салатом романо, курицей и соусом цезарь.",
            ingredients: [
                "1 кочан салата романо",
                "300 г куриного филе",
                "100 г пармезана",
                "100 г гренок",
                "2 зубчика чеснока",
                "50 г анчоусов",
                "1 яйцо",
                "Оливковое масло",
                "Лимонный сок"
            ],
            instructions: [
                "Обжарьте куриное филе до золотистой корочки.",
                "Порвите салат романо руками.",
                "Приготовьте соус: смешайте чеснок, анчоусы, яйцо, лимонный сок и оливковое масло.",
                "Соберите салат: салат, курица, гренки, пармезан.",
                "Заправьте соусом и аккуратно перемешайте.",
                "Украсьте дополнительным пармезаном и черным перцем."
            ],
            calories: "380 ккал",
            category: "Основные блюда"
        },
        {
            id: 3,
            title: "Борщ",
            image: "media/recipe4.jpg",
            time: "90 мин",
            difficulty: "Средняя",
            description: "Традиционный украинский суп со свеклой и мясом.",
            ingredients: [
                "500 г говядины на кости",
                "2 свеклы",
                "2 картофелины",
                "1 морковь",
                "1 луковица",
                "200 г капусты",
                "2 ст.л. томатной пасты",
                "3 зубчика чеснока",
                "Сметана",
                "Укроп",
                "Соль, перец, лавровый лист"
            ],
            instructions: [
                "Сварите бульон из говядины (около 1,5 часов).",
                "Нарежьте овощи: свеклу соломкой, картофель кубиками.",
                "Обжарьте лук, морковь и свеклу с томатной пастой.",
                "Добавьте обжаренные овощи в бульон.",
                "Через 10 минут добавьте картофель и капусту.",
                "Варите до готовности овощей.",
                "В конце добавьте измельченный чеснок и лавровый лист.",
                "Подавайте со сметаной и укропом."
            ],
            calories: "280 ккал",
            category: "Основные блюда"
        },
        {
            id: 4,
            title: "Гуакамоле",
            image: "media/recipe6.jpg",
            time: "15 мин",
            difficulty: "Легкая",
            description: "Мексиканская закуска из авокадо с лаймом и специями.",
            ingredients: [
                "3 спелых авокадо",
                "1 помидор",
                "1/2 красной луковицы",
                "1 лайм",
                "1/2 пучка кинзы",
                "1 перчик халапеньо",
                "Соль",
                "Перец",
                "Чипсы из тортильи"
            ],
            instructions: [
                "Разомните авокадо вилкой до желаемой консистенции.",
                "Мелко нарежьте помидор, красный лук и халапеньо.",
                "Измельчите кинзу.",
                "Смешайте все ингредиенты в миске.",
                "Добавьте сок лайма, соль и перец по вкусу.",
                "Оставьте на 10 минут для насыщения вкусов.",
                "Подавайте сразу с чипсами из тортильи."
            ],
            calories: "220 ккал",
            category: "Основные блюда"
        },
        // Десерты
        {
            id: 5,
            title: "Тирамису",
            image: "media/recipe2.jpg",
            time: "40 мин + 6 часов охлаждение",
            difficulty: "Средняя",
            description: "Итальянский десерт из печенья савоярди, маскарпоне и кофе.",
            ingredients: [
                "250 г маскарпоне",
                "3 яйца",
                "100 г сахара",
                "200 г савоярди",
                "200 мл крепкого кофе",
                "Какао-порошок",
                "Ром или амаретто (по желанию)"
            ],
            instructions: [
                "Приготовьте крепкий кофе и остудите его.",
                "Отделите желтки от белков.",
                "Взбейте желтки с сахаром до светлой пены.",
                "Добавьте маскарпоне и аккуратно перемешайте.",
                "Взбейте белки до жестких пиков и вмешайте в крем.",
                "Быстро обмакните савоярди в кофе и выложите в форму.",
                "Чередуйте слои печенья и крема.",
                "Посыпьте какао и охлаждайте 4-6 часов."
            ],
            calories: "450 ккал",
            category: "Десерты"
        },
        {
            id: 6,
            title: "Панкейки",
            image: "media/recipe5.jpg",
            time: "20 мин",
            difficulty: "Легкая",
            description: "Американские пышные блинчики с кленовым сиропом.",
            ingredients: [
                "200 г муки",
                "2 яйца",
                "250 мл молока",
                "2 ст.л. сахара",
                "1 ч.л. разрыхлителя",
                "1/2 ч.л. соды",
                "Щепотка соли",
                "Ванильный экстракт",
                "Сливочное масло",
                "Кленовый сироп"
            ],
            instructions: [
                "Смешайте сухие ингредиенты: муку, сахар, разрыхлитель, соду, соль.",
                "Взбейте яйца с молоком и ванильным экстрактом.",
                "Соедините жидкие и сухие ингредиенты, аккуратно перемешайте.",
                "Разогрейте сковороду с небольшим количеством масла.",
                "Выливайте тесто порциями по 1/4 чашки, жарьте до пузырьков.",
                "Переверните и жарьте до золотистого цвета.",
                "Подавайте с маслом, кленовым сиропом и свежими ягодами."
            ],
            calories: "320 ккал",
            category: "Десерты"
        },
        // Новые рецепты - Основные блюда
        {
            id: 7,
            title: "Лазанья Болоньезе",
            image: "media/recipe7.jpg",
            time: "60 мин",
            difficulty: "Средняя",
            description: "Итальянская лазанья с мясным соусом и сыром.",
            ingredients: [
                "12 листов лазаньи",
                "500 г мясного фарша",
                "1 луковица",
                "2 моркови",
                "2 стебля сельдерея",
                "800 г томатов",
                "200 г моцареллы",
                "100 г пармезана",
                "Бешамель соус"
            ],
            instructions: [
                "Приготовьте мясной соус болоньезе.",
                "Отварите листы лазаньи аль денте.",
                "Соберите лазанью слоями: соус, листы, бешамель, сыр.",
                "Повторите слои 3-4 раза.",
                "Запекайте 30-40 минут до золотистой корочки.",
                "Дайте настояться 10 минут перед подачей."
            ],
            calories: "480 ккал",
            category: "Основные блюда"
        },
        {
            id: 8,
            title: "Стейк с овощами",
            image: "media/recipe8.jpg",
            time: "25 мин",
            difficulty: "Средняя",
            description: "Сочный стейк с овощами-гриль.",
            ingredients: [
                "2 стейка рибай",
                "2 болгарских перца",
                "1 кабачок",
                "1 баклажан",
                "Оливковое масло",
                "Соль",
                "Перец",
                "Прованские травы"
            ],
            instructions: [
                "Разогрейте гриль или сковороду.",
                "Натрите стейки солью, перцем и маслом.",
                "Обжарьте стейки по 4-5 минут с каждой стороны.",
                "Нарежьте овощи и обжарьте на гриле.",
                "Дайте стейкам отдохнуть 5 минут перед подачей."
            ],
            calories: "550 ккал",
            category: "Основные блюда"
        },
        // Десерты
        {
            id: 9,
            title: "Шоколадный фондан",
            image: "media/recipe9.jpg",
            time: "35 мин",
            difficulty: "Средняя",
            description: "Шоколадный десерт с жидкой сердцевиной.",
            ingredients: [
                "200 г темного шоколада",
                "100 г сливочного масла",
                "2 яйца",
                "2 желтка",
                "100 г сахара",
                "50 г муки",
                "Щепотка соли"
            ],
            instructions: [
                "Растопите шоколад с маслом.",
                "Взбейте яйца с сахаром до пены.",
                "Смешайте шоколадную и яичную смеси.",
                "Добавьте муку и перемешайте.",
                "Выпекайте 10-12 минут при 200°C.",
                "Подавайте сразу с мороженым."
            ],
            calories: "420 ккал",
            category: "Десерты"
        },
        {
            id: 10,
            title: "Чизкейк Нью-Йорк",
            image: "media/recipe10.jpg",
            time: "90 мин + охлаждение",
            difficulty: "Сложная",
            description: "Классический нью-йоркский чизкейк.",
            ingredients: [
                "500 г творожного сыра",
                "200 г печенья",
                "100 г сливочного масла",
                "200 г сметаны",
                "3 яйца",
                "150 г сахара",
                "Ванильный экстракт"
            ],
            instructions: [
                "Измельчите печенье и смешайте с маслом.",
                "Выложите основу в форму и охладите.",
                "Взбейте сыр с сахаром и ванилью.",
                "Добавьте яйца по одному, затем сметану.",
                "Выпекайте на водяной бане 60 минут.",
                "Охлаждайте 4-6 часов."
            ],
            calories: "380 ккал",
            category: "Десерты"
        },
        // Напитки
        {
            id: 11,
            title: "Мохито",
            image: "media/recipe11.jpg",
            time: "5 мин",
            difficulty: "Легкая",
            description: "Освежающий коктейль с мятой и лаймом.",
            ingredients: [
                "Свежая мята",
                "1 лайм",
                "2 ч.л. сахара",
                "50 мл белого рома",
                "Содовая",
                "Лёд"
            ],
            instructions: [
                "Разомните мяту с сахаром и лаймом в стакане.",
                "Заполните стакан льдом.",
                "Добавьте ром и долейте содовой.",
                "Аккуратно перемешайте.",
                "Украсьте мятой и долькой лайма."
            ],
            calories: "120 ккал",
            category: "Напитки"
        },
        {
            id: 12,
            title: "Ягодный смузи",
            image: "media/recipe12.jpg",
            time: "5 мин",
            difficulty: "Легкая",
            description: "Питательный смузи из свежих ягод.",
            ingredients: [
                "1 банан",
                "100 г смеси ягод",
                "150 мл йогурта",
                "100 мл молока",
                "1 ч.л. меда",
                "Лёд"
            ],
            instructions: [
                "Очистите банан и нарежьте кусочками.",
                "Поместите все ингредиенты в блендер.",
                "Взбивайте до однородной консистенции.",
                "Подавайте сразу, украсив ягодами."
            ],
            calories: "180 ккал",
            category: "Напитки"
        },
        // Вегетарианские
        {
            id: 13,
            title: "Овощной вок",
            image: "media/recipe13.jpg",
            time: "20 мин",
            difficulty: "Легкая",
            description: "Азиатское блюдо с овощами и тофу.",
            ingredients: [
                "200 г тофу",
                "1 морковь",
                "1 болгарский перец",
                "100 г стручковой фасоли",
                "2 зубчика чеснока",
                "Имбирь",
                "Соевый соус",
                "Кунжутное масло"
            ],
            instructions: [
                "Нарежьте овощи соломкой.",
                "Обжарьте тофу до золотистой корочки.",
                "Быстро обжарьте овощи в воке.",
                "Добавьте соевый соус и специи.",
                "Подавайте с рисом."
            ],
            calories: "250 ккал",
            category: "Вегетарианские"
        },
        {
            id: 14,
            title: "Греческий салат",
            image: "media/recipe14.jpg",
            time: "15 мин",
            difficulty: "Легкая",
            description: "Классический греческий салат с фетой.",
            ingredients: [
                "2 помидора",
                "1 огурец",
                "1 красная луковица",
                "100 г маслин",
                "200 г сыра фета",
                "Орегано",
                "Оливковое масло"
            ],
            instructions: [
                "Крупно нарежьте овощи.",
                "Добавьте маслины и сыр фета.",
                "Посыпьте орегано.",
                "Заправьте оливковым маслом.",
                "Аккуратно перемешайте."
            ],
            calories: "210 ккал",
            category: "Вегетарианские"
        },
        // Дополнительные рецепты
        {
            id: 15,
            title: "Курица терияки",
            image: "media/recipe15.jpg",
            time: "30 мин",
            difficulty: "Легкая",
            description: "Курица в сладком соусе терияки.",
            ingredients: [
                "500 г куриного филе",
                "4 ст.л. соуса терияки",
                "2 зубчика чеснока",
                "1 ст.л. меда",
                "Кунжут",
                "Зеленый лук"
            ],
            instructions: [
                "Нарежьте курицу кусочками.",
                "Обжарьте до золотистой корочки.",
                "Добавьте соус терияки и мед.",
                "Тушите 10 минут.",
                "Посыпьте кунжутом и луком."
            ],
            calories: "290 ккал",
            category: "Основные блюда"
        },
        {
            id: 16,
            title: "Тыквенный суп-пюре",
            image: "media/recipe16.jpg",
            time: "40 мин",
            difficulty: "Легкая",
            description: "Нежный крем-суп из тыквы.",
            ingredients: [
                "500 г тыквы",
                "1 луковица",
                "2 моркови",
                "500 мл овощного бульона",
                "100 мл сливок",
                "Имбирь",
                "Мускатный орех"
            ],
            instructions: [
                "Обжарьте лук и морковь.",
                "Добавьте тыкву и бульон.",
                "Варите 25 минут.",
                "Измельчите блендером.",
                "Добавьте сливки и специи."
            ],
            calories: "190 ккал",
            category: "Основные блюда"
        },
        {
            id: 17,
            title: "Лимонный тарт",
            image: "media/recipe17.jpg",
            time: "50 мин",
            difficulty: "Средняя",
            description: "Освежающий лимонный десерт.",
            ingredients: [
                "200 г песочного теста",
                "3 лимона",
                "4 яйца",
                "150 г сахара",
                "100 г сливочного масла"
            ],
            instructions: [
                "Выпеките основу из теста.",
                "Приготовьте лимонный крем.",
                "Залейте крем в основу.",
                "Выпекайте 20 минут.",
                "Охладите перед подачей."
            ],
            calories: "320 ккал",
            category: "Десерты"
        },
        {
            id: 18,
            title: "Матча латте",
            image: "media/recipe18.jpg",
            time: "10 мин",
            difficulty: "Легкая",
            description: "Традиционный японский чайный напиток.",
            ingredients: [
                "1 ч.л. матча порошка",
                "200 мл молока",
                "1 ч.л. меда",
                "Ванильный экстракт"
            ],
            instructions: [
                "Взбейте матча с небольшим количеством горячей воды.",
                "Подогрейте молоко с медом.",
                "Вспеньте молоко.",
                "Аккуратно влейте молоко в чашку с матча.",
                "Посыпьте матча порошком."
            ],
            calories: "80 ккал",
            category: "Напитки"
        },
        {
            id: 19,
            title: "Киноа с овощами",
            image: "media/recipe19.jpg",
            time: "25 мин",
            difficulty: "Легкая",
            description: "Питательное блюдо из киноа.",
            ingredients: [
                "200 г киноа",
                "1 цуккини",
                "1 болгарский перец",
                "100 г кукурузы",
                "Лимонный сок",
                "Оливковое масло",
                "Петрушка"
            ],
            instructions: [
                "Отварите киноа согласно инструкции.",
                "Обжарьте овощи.",
                "Смешайте киноа с овощами.",
                "Добавьте лимонный сок и зелень.",
                "Подавайте теплым или холодным."
            ],
            calories: "230 ккал",
            category: "Вегетарианские"
        },
        {
            id: 20,
            title: "Фалафель",
            image: "media/recipe20.jpg",
            time: "45 мин",
            difficulty: "Средняя",
            description: "Восточные котлетки из нута.",
            ingredients: [
                "400 г нута",
                "1 луковица",
                "3 зубчика чеснока",
                "Петрушка",
                "Кинза",
                "Кумин",
                "Кориандр"
            ],
            instructions: [
                "Замочите нут на ночь.",
                "Измельчите все ингредиенты.",
                "Сформируйте котлетки.",
                "Обжарьте во фритюре.",
                "Подавайте с соусом тахини."
            ],
            calories: "280 ккал",
            category: "Вегетарианские"
        }
    ];

    // Элементы DOM
    const recipesGrid = document.getElementById('recipesGrid');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const exploreRecipesBtn = document.getElementById('exploreRecipesBtn');
    const recipeModal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoLink = document.querySelector('.logo-link');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let visibleRecipes = 6;
    let currentRecipes = recipes;

    // Заполнение сетки рецептов
    function renderRecipes(recipesToRender = currentRecipes) {
        recipesGrid.innerHTML = '';
        
        if (recipesToRender.length === 0) {
            recipesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Рецепты не найдены</h3>
                    <p>Попробуйте изменить поисковый запрос</p>
                </div>
            `;
            loadMoreBtn.style.display = 'none';
            return;
        }
        
        const recipesToShow = recipesToRender.slice(0, visibleRecipes);
        
        recipesToShow.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.setAttribute('data-id', recipe.id);
            
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span>${recipe.difficulty}</span>
                    </div>
                    <p class="recipe-description">${recipe.description}</p>
                    <a href="#" class="recipe-link view-recipe" data-id="${recipe.id}">Смотреть рецепт →</a>
                </div>
            `;
            
            recipesGrid.appendChild(recipeCard);
        });

        // Показываем/скрываем кнопку "Загрузить еще"
        if (recipesToRender.length > visibleRecipes) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }

        // Добавляем обработчики для карточек рецептов
        document.querySelectorAll('.recipe-card, .view-recipe').forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = this.getAttribute('data-id');
                openRecipeModal(recipeId);
            });
        });
    }

    // Функция загрузки дополнительных рецептов
    function loadMoreRecipes() {
        visibleRecipes += 6;
        renderRecipes(currentRecipes);
        
        // Прокручиваем к новым рецептам
        setTimeout(() => {
            recipesGrid.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    }

    // Открытие модального окна с рецептом
    function openRecipeModal(recipeId) {
        const recipe = recipes.find(r => r.id == recipeId);
        if (!recipe) return;

        modalBody.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            <div class="recipe-detail-meta">
                <div class="recipe-detail-info">
                    <i class="far fa-clock"></i>
                    <span>${recipe.time}</span>
                </div>
                <div class="recipe-detail-info">
                    <i class="fas fa-fire"></i>
                    <span>${recipe.calories}</span>
                </div>
                <div class="recipe-detail-info">
                    <i class="fas fa-chart-line"></i>
                    <span>${recipe.difficulty}</span>
                </div>
                <div class="recipe-detail-info">
                    <i class="fas fa-utensils"></i>
                    <span>${recipe.category}</span>
                </div>
            </div>
            <div class="recipe-detail-content">
                <div class="ingredients">
                    <h3><i class="fas fa-shopping-basket"></i> Ингредиенты</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <div class="instructions">
                    <h3><i class="fas fa-list-ol"></i> Инструкция приготовления</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
            <div class="recipe-actions">
                <button class="btn btn-primary" id="printRecipeBtn">
                    <i class="fas fa-print"></i> Распечатать рецепт
                </button>
                <button class="btn btn-secondary" id="shareRecipeBtn">
                    <i class="fas fa-share-alt"></i> Поделиться
                </button>
            </div>
        `;

        // Добавляем обработчики для кнопок в модальном окне
        document.getElementById('printRecipeBtn').addEventListener('click', function() {
            const recipeTitle = document.querySelector('.recipe-detail-title').textContent;
            alert(`Рецепт "${recipeTitle}" отправлен на печать!`);
        });

        document.getElementById('shareRecipeBtn').addEventListener('click', function() {
            const recipeTitle = document.querySelector('.recipe-detail-title').textContent;
            if (navigator.share) {
                navigator.share({
                    title: recipeTitle,
                    text: 'Посмотрите этот вкусный рецепт!',
                    url: window.location.href
                });
            } else {
                alert(`Рецепт "${recipeTitle}" скопирован для分享!`);
            }
        });

        recipeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Функция для открытия категории
    function openCategory(categoryName) {
        const categoryRecipes = recipes.filter(recipe => recipe.category === categoryName);

        modalBody.innerHTML = `
            <div class="category-description">
                <h2>${categoryName}</h2>
                <p>В этой категории собраны ${categoryRecipes.length} рецептов для настоящих гурманов. Откройте для себя новые вкусы и совершенствуйте свои кулинарные навыки.</p>
                
                ${categoryRecipes.length > 0 ? `
                <div class="category-recipes-preview">
                    <h4>Популярные рецепты:</h4>
                    <div class="preview-grid">
                        ${categoryRecipes.slice(0, 6).map(recipe => `
                            <div class="preview-recipe" data-id="${recipe.id}">
                                <img src="${recipe.image}" alt="${recipe.title}">
                                <span>${recipe.title}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <button class="btn btn-primary" id="viewAllCategoryBtn">
                    Смотреть все рецепты (${categoryRecipes.length})
                </button>
            </div>
        `;

        // Добавляем обработчики после рендера
        document.getElementById('viewAllCategoryBtn').addEventListener('click', function() {
            filterByCategory(categoryName);
        });

        // Обработчики для preview рецептов
        document.querySelectorAll('.preview-recipe').forEach(preview => {
            preview.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-id');
                openRecipeModalFromCategory(recipeId);
            });
        });

        recipeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Функция для открытия рецепта из категории
    function openRecipeModalFromCategory(recipeId) {
        closeRecipeModal();
        setTimeout(() => {
            openRecipeModal(recipeId);
        }, 300);
    }

    // Функция фильтрации по категории
    function filterByCategory(categoryName) {
        closeRecipeModal();
        visibleRecipes = 6;
        currentRecipes = recipes.filter(recipe => recipe.category === categoryName);
        renderRecipes(currentRecipes);
        scrollToSection('#recipes');
        
        // Обновляем активную навигацию
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('a[href="#recipes"]').classList.add('active');
    }

    // Закрытие модального окна
    function closeRecipeModal() {
        recipeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Поиск рецептов
    function searchRecipes(query) {
        if (!query.trim()) {
            currentRecipes = recipes;
            visibleRecipes = 6;
            renderRecipes();
            return;
        }

        currentRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(query.toLowerCase())
            ) ||
            recipe.category.toLowerCase().includes(query.toLowerCase())
        );

        visibleRecipes = 6;
        renderRecipes(currentRecipes);
    }

    // Плавная прокрутка к секциям
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Обновление активной навигации при прокрутке
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + 100;

        let currentActive = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentActive = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentActive}`) {
                link.classList.add('active');
            }
        });
    }

    // Обработчики событий
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    searchBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });

    exploreRecipesBtn.addEventListener('click', function() {
        scrollToSection('#recipes');
        
        // Обновляем активную навигацию
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('a[href="#recipes"]').classList.add('active');
    });

    loadMoreBtn.addEventListener('click', loadMoreRecipes);

    closeModal.addEventListener('click', closeRecipeModal);

    recipeModal.addEventListener('click', function(e) {
        if (e.target === recipeModal) {
            closeRecipeModal();
        }
    });

    // Обработчики для навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                scrollToSection(targetId);
            }
            
            // Закрываем мобильное меню если открыто
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Обработчик для логотипа
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('a[href="#home"]').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Обработчики для карточек категорий
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            openCategory(categoryName);
        });
    });

        // Поиск при вводе
    searchInput.addEventListener('input', function() {
        searchRecipes(this.value);
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Закрытие модального окна по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeRecipeModal();
        }
    });

    // Обновление активной навигации при прокрутке
    window.addEventListener('scroll', updateActiveNav);

    // Инициализация
    currentRecipes = recipes;
    renderRecipes();
    updateActiveNav();
});