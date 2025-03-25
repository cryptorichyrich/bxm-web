var module_2712622 = (function() {
    var __hs_messages = {"pl":{"name":{"message":"Wyszukiwanie na stronie","description":"","placeholders":null}},"en-gb":{"name":{"message":"Site search input","description":"","placeholders":null}},"fr":{"name":{"message":"Champ de recherche de site","description":"","placeholders":null}},"zh-tw":{"name":{"message":"網站搜尋輸入","description":"","placeholders":null}},"hu":{"name":{"message":"Bevitel a honlapon történő kereséshez","description":"","placeholders":null}},"fr-ca":{"name":{"message":"Entrée pour la recherche sur le site","description":"","placeholders":null}},"it":{"name":{"message":"Input di ricerca del sito","description":"","placeholders":null}},"ca-es":{"name":{"message":"Entrada de cerca al lloc","description":"","placeholders":null}},"pt-pt":{"name":{"message":"Entrada de pesquisa do site","description":"","placeholders":null}},"he-il":{"name":{"message":"קלט חיפוש באתר","description":"","placeholders":null}},"ar-eg":{"name":{"message":"إدخال البحث في الموقع","description":"","placeholders":null}},"vi":{"name":{"message":"Thông tin đầu vào để tìm kiếm trong site","description":"","placeholders":null}},"de":{"name":{"message":"Website-Sucheingabe","description":"","placeholders":null}},"lt":{"name":{"message":"Svetainės paieškos įvestis","description":"","placeholders":null}},"da":{"name":{"message":"Indtastning af webstedssøgning","description":"","placeholders":null}},"es":{"name":{"message":"Entrada de búsqueda en el sitio","description":"","placeholders":null}},"id":{"name":{"message":"Input Pencarian Situs","description":"","placeholders":null}},"sl":{"name":{"message":"Vnos iskanja po spletnem mestu","description":"","placeholders":null}},"ko":{"name":{"message":"사이트 검색 입력","description":"","placeholders":null}},"cs":{"name":{"message":"Výraz hledaný na stránce","description":"","placeholders":null}},"es-mx":{"name":{"message":"Entrada de búsqueda del sitio","description":"","placeholders":null}},"el":{"name":{"message":"Είσοδος αναζήτησης ιστότοπου","description":"","placeholders":null}},"tr":{"name":{"message":"Site arama girişi","description":"","placeholders":null}},"af":{"name":{"message":"Webwerfsoektogtoevoer","description":"","placeholders":null}},"ru":{"name":{"message":"Входная информация поиска по сайту","description":"","placeholders":null}},"ja":{"name":{"message":"サイト検索入力","description":"","placeholders":null}},"ro":{"name":{"message":"Introducere căutare site","description":"","placeholders":null}},"no":{"name":{"message":"Inndata sidesøk","description":"","placeholders":null}},"zh-hk":{"name":{"message":"網站搜尋輸入","description":"","placeholders":null}},"bn":{"name":{"message":"সাইট অনুসন্ধানের ইনপুট","description":"","placeholders":null}},"hr":{"name":{"message":"Unos za pretraživanje web-mjesta","description":"","placeholders":null}},"sv":{"name":{"message":"Inmatning av sökning på webbplatsen","description":"","placeholders":null}},"bg":{"name":{"message":"Въвеждане на търсене в сайт","description":"","placeholders":null}},"ms":{"name":{"message":"Input Carian Laman Web","description":"","placeholders":null}},"zh-cn":{"name":{"message":"网站搜索输入","description":"","placeholders":null}},"en":{"name":{"message":"Site Search Input","description":"","placeholders":null}},"tl":{"name":{"message":"Input ng Paghahanap sa Site","description":"","placeholders":null}},"uk":{"name":{"message":"Вхідна інформація пошуку по сайту","description":"","placeholders":null}},"sk":{"name":{"message":"Zadaný text vyhľadávania webu","description":"","placeholders":null}},"nl":{"name":{"message":"Invoer doorzoeken site","description":"","placeholders":null}},"th":{"name":{"message":"การป้อนคำค้นหาในเว็บไซต์","description":"","placeholders":null}},"pt":{"name":{"message":"Entrada de pesquisa no site","description":"","placeholders":null}},"fi":{"name":{"message":"Sivun haun tulos","description":"","placeholders":null}}};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
var hsSearch = function(_instance) {
  var TYPEAHEAD_LIMIT = 3;
  var KEYS = {
    TAB: 'Tab',
    ESC: 'Esc', // IE11 & Edge 16 value for Escape
    ESCAPE: 'Escape',
    UP: 'Up', // IE11 & Edge 16 value for Arrow Up
    ARROW_UP: 'ArrowUp',
    DOWN: 'Down', // IE11 & Edge 16 value for Arrow Down
    ARROW_DOWN: 'ArrowDown',
  };
  var searchTerm = '',
    searchForm = _instance,
    searchField = _instance.querySelector('.hs-search-field__input'),
    searchResults = _instance.querySelector('.hs-search-field__suggestions'),
    searchOptions = function() {
      var formParams = [];
      var form = _instance.querySelector('form');
      for (
        var i = 0;
        i < form.querySelectorAll('input[type=hidden]').length;
        i++
      ) {
        var e = form.querySelectorAll('input[type=hidden]')[i];
        if (e.name !== 'limit') {
          formParams.push(
            encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value)
          );
        }
      }
      var queryString = formParams.join('&');
      return queryString;
    };

  var debounce = function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);
        if (callNow) {
          func.apply(context, args);
        }
      };
    },
    emptySearchResults = function() {
      searchResults.innerHTML = '';
      searchField.focus();
      searchForm.classList.remove('hs-search-field--open');
    },
    fillSearchResults = function(response) {
      var items = [];
      items.push(
        "<li id='results-for'>Results for \"" + response.searchTerm + '"</li>'
      );
      response.results.forEach(function(val, index) {
        items.push(
          "<li id='result" +
            index +
            "'><a href='" +
            val.url +
            "'>" +
            val.title +
            '</a></li>'
        );
      });

      emptySearchResults();
      searchResults.innerHTML = items.join('');
      searchForm.classList.add('hs-search-field--open');
    },
    getSearchResults = function() {
      var request = new XMLHttpRequest();
      var requestUrl =
        '/_hcms/search?&term=' +
        encodeURIComponent(searchTerm) +
        '&limit=' +
        encodeURIComponent(TYPEAHEAD_LIMIT) +
        '&autocomplete=true&analytics=true&' +
        searchOptions();

      request.open('GET', requestUrl, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          if (data.total > 0) {
            fillSearchResults(data);
            trapFocus();
          } else {
            emptySearchResults();
          }
        } else {
          console.error('Server reached, error retrieving results.');
        }
      };
      request.onerror = function() {
        console.error('Could not reach the server.');
      };
      request.send();
    },
    trapFocus = function() {
      var tabbable = [];
      tabbable.push(searchField);
      var tabbables = searchResults.getElementsByTagName('A');
      for (var i = 0; i < tabbables.length; i++) {
        tabbable.push(tabbables[i]);
      }
      var firstTabbable = tabbable[0],
        lastTabbable = tabbable[tabbable.length - 1];
      var tabResult = function(e) {
          if (e.target == lastTabbable && !e.shiftKey) {
            e.preventDefault();
            firstTabbable.focus();
          } else if (e.target == firstTabbable && e.shiftKey) {
            e.preventDefault();
            lastTabbable.focus();
          }
        },
        nextResult = function(e) {
          e.preventDefault();
          if (e.target == lastTabbable) {
            firstTabbable.focus();
          } else {
            tabbable.forEach(function(el) {
              if (el == e.target) {
                tabbable[tabbable.indexOf(el) + 1].focus();
              }
            });
          }
        },
        lastResult = function(e) {
          e.preventDefault();
          if (e.target == firstTabbable) {
            lastTabbable.focus();
          } else {
            tabbable.forEach(function(el) {
              if (el == e.target) {
                tabbable[tabbable.indexOf(el) - 1].focus();
              }
            });
          }
        };
      searchForm.addEventListener('keydown', function(e) {
        switch (e.key) {
          case KEYS.TAB:
            tabResult(e);
            break;
          case KEYS.ESC:
          case KEYS.ESCAPE:
            emptySearchResults();
            break;
          case KEYS.UP:
          case KEYS.ARROW_UP:
            lastResult(e);
            break;
          case KEYS.DOWN:
          case KEYS.ARROW_DOWN:
            nextResult(e);
            break;
        }
      });
    },
    isSearchTermPresent = debounce(function() {
      searchTerm = searchField.value;
      if (searchTerm.length > 2) {
        getSearchResults();
      } else if (searchTerm.length == 0) {
        emptySearchResults();
      }
    }, 250),
    init = (function() {
      searchField.addEventListener('input', function(e) {
        if (searchTerm != searchField.value) {
          isSearchTermPresent();
        }
      });
    })();
};

if (
  document.attachEvent
    ? document.readyState === 'complete'
    : document.readyState !== 'loading'
) {
  var searchResults = document.querySelectorAll('.hs-search-field');
  Array.prototype.forEach.call(searchResults, function(el) {
    var hsSearchModule = hsSearch(el);
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    var searchResults = document.querySelectorAll('.hs-search-field');
    Array.prototype.forEach.call(searchResults, function(el) {
      var hsSearchModule = hsSearch(el);
    });
  });
}

  })();